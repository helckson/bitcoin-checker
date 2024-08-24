const bitcoinService = require('../services/bitcoinService');
const { formatDateForCoinGecko } = require('../utils/dateUtils');



exports.getBitcoinPriceByDate = async (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ error: 'Por favor, forneça uma data no formato YYYY-MM-DD.' });
    }

    try {
        const price = await bitcoinService.getPriceByDate(date);
        const dateFormatted = formatDateForCoinGecko(date);

        if (price) {
            res.json({ price: price, message: `O preço do Bitcoin em ${dateFormatted} foi $${price.toFixed(2)} USD.` });
        } else {
            res.status(404).json({ error: 'Não foi possível obter o preço para essa data.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o preço do Bitcoin. Por favor, tente novamente mais tarde.' });
    }
};


exports.getBitcoinPriceChange = async (req, res) => {
    const { date1, date2 } = req.query;

    if (!date1 || !date2) {
        return res.status(400).send('Por favor, forneça duas datas no formato YYYY-MM-DD.');
    }

    try {
        const priceChange = await bitcoinService.getPriceChangeBetweenDates(date1, date2);

        const message = priceChange > 0
            ? `O Bitcoin valorizou ${priceChange.toFixed(2)}% entre ${formatDateForCoinGecko(date1)} e ${formatDateForCoinGecko(date2)}.`
            : `O Bitcoin desvalorizou ${Math.abs(priceChange).toFixed(2)}% entre ${formatDateForCoinGecko(date1)} e ${formatDateForCoinGecko(date2)}.`;

        res.send(message);
    } catch (error) {
        res.status(500).send('Erro ao calcular a valorização/desvalorização do Bitcoin. Por favor, tente novamente mais tarde.');
    }
};
