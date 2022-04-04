const express = require('express');
const { body } = require('express-validator');
const { shopview } = require('../../controller/shop/shopview.js');
const { getPrices} = require('../../controller/shop/getPrices.js');

const router = express.Router();

router.get('/:PRODUCT_KEY', shopview);
router.post('/getPrices', getPrices);
module.exports = router;