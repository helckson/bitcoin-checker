const axios = require('axios');
const dateUtils = require('../utils/dateUtils');
const prisma = require('../prismaClient');

exports.getPriceByDate = async (date) => {
    try {
        // Verificar se o preço já está armazenado no cache
        const cachedPrice = await prisma.cachedBitcoinPrice.findUnique({
            where: { date: new Date(date) },
        });

        if (cachedPrice) {
            console.log(`Preço encontrado no cache para a data ${date}: $${cachedPrice.price}`);
            return cachedPrice.price;
        }

        // Se não estiver no cache, buscar na API do CoinGecko
        const formattedDate = dateUtils.formatDateForCoinGecko(date);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history`, {
            params: { date: formattedDate },
        });

        const price = response.data.market_data?.current_price?.usd;

        if (price) {
            // Armazenar o preço no cache
            await prisma.cachedBitcoinPrice.create({
                data: {
                    date: new Date(date),
                    price: price,
                },
            });

            console.log(`Preço armazenado no cache para a data ${date}: $${price}`);
        }

        return price;
    } catch (error) {
        throw new Error('Erro ao buscar o preço do Bitcoin.');
    }
};
