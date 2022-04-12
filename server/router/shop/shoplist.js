const express = require('express');
const { body } = require('express-validator');
const { shoplist } = require('../../controller/shop/shoplist.js');
const { totalCnt, productlist } = require('../../controller/shop/totalCnt.js');

const router = express.Router();

router.post('/', shoplist);
router.post('/totalCnt', totalCnt);
router.post('/productlist', productlist);

module.exports = router;


