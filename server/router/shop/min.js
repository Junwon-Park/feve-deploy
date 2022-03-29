const express = require('express');
const { body } = require('express-validator');
const { min } = require('../../controller/shop/min.js');

const router = express.Router();

router.post('/', min);

module.exports = router;


