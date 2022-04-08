const express = require('express');
const { body } = require('express-validator');
const { filterCate } = require('../../controller/shop/filterCate.js');

const router = express.Router();

router.post('/', filterCate);

module.exports = router;


