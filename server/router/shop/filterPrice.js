const express = require('express');
const { body } = require('express-validator');
const { filterPrice } = require('../../controller/shop/filterPrice.js');

const router = express.Router();

router.post('/', filterPrice);

module.exports = router;


