const express = require('express');
const bitcoinController = require('../controllers/bitcoinController');

const router = express.Router();

router.get('/bitcoin-price', bitcoinController.getBitcoinPriceByDate);
router.get('/bitcoin-price-change', bitcoinController.getBitcoinPriceChange);

module.exports = router;
