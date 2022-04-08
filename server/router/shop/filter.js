const express = require('express');
const { body } = require('express-validator');
const { filter } = require('../../controller/shop/filter.js');

const router = express.Router();

router.post('/', filter);

module.exports = router;


