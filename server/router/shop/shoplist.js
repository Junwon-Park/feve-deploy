const express = require('express');
const { body } = require('express-validator');
const { shoplist } = require('../../controller/shop/shoplist.js');

const router = express.Router();

router.get('/', shoplist);

module.exports = router;


