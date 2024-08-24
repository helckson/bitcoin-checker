const express = require('express');
const bitcoinController = require('../controllers/bitcoinController');

const router = express.Router();

router.get(itcoinController.getBitcoinPriceByDate);
router.get(bitcoinController.getBitcoinPriceChange);

module.exports = router;
