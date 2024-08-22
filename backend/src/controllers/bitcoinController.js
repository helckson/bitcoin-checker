const bitcoinService = require('../services/bitcoinService');

exports.getBitcoinPriceByDate = async (req, res) => {
    const { date } = req.query;

    if (!date) {
        return res.status(400).send('Por favor, forneça uma data no formato YYYY-MM-DD.');
    }

    try {
        const price = await bitcoinService.getPriceByDate(date);

        if (price) {
            res.send(`O preço do Bitcoin em ${date} foi $${price} USD.`);
        } else {
            res.send('Não foi possível obter o preço para essa data.');
        }
    } catch (error) {
        res.status(500).send('Erro ao buscar o preço do Bitcoin. Por favor, tente novamente mais tarde.');
    }
};
