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

exports.getBitcoinPriceChange = async (req, res) => {
    const { date1, date2 } = req.query;

    if (!date1 || !date2) {
        return res.status(400).send('Por favor, forneça duas datas no formato YYYY-MM-DD.');
    }

    try {
        const priceChange = await bitcoinService.getPriceChangeBetweenDates(date1, date2);

        const message = priceChange > 0
            ? `O Bitcoin valorizou ${priceChange.toFixed(2)}% entre ${date1} e ${date2}.`
            : `O Bitcoin desvalorizou ${Math.abs(priceChange).toFixed(2)}% entre ${date1} e ${date2}.`;

        res.send(message);
    } catch (error) {
        res.status(500).send('Erro ao calcular a valorização/desvalorização do Bitcoin. Por favor, tente novamente mais tarde.');
    }
};
