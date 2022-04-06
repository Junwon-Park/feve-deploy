const express = require('express');
const { body } = require('express-validator');
const { shopview } = require('../../controller/shop/shopview.js');
const { goLike } = require('../../controller/shop/goLike.js');
const { goDislike } = require('../../controller/shop/goDislike.js');
const { countLike } = require('../../controller/shop/countLike.js');
const { recentBuyPrice } = require('../../controller/shop/recentBuyPrice.js');
const { recentSellPrice } = require('../../controller/shop/recentSellPrice.js');
const { buyTablePrice } = require('../../controller/shop/buyTablePrice.js');
const { sellTablePrice } = require('../../controller/shop/sellTablePrice.js');


const router = express.Router();

router.get('/:PRODUCT_KEY', shopview);
router.post('/:PRODUCT_KEY/goLike',goLike);
router.post('/:PRODUCT_KEY/goDislike',goDislike);
router.post('/:PRODUCT_KEY/countLike',countLike);
router.post('/:PRODUCT_KEY/recentBuyPrice',recentBuyPrice);
router.post('/:PRODUCT_KEY/recentSellPrice',recentSellPrice);
router.post('/:PRODUCT_KEY/buyTablePrice',buyTablePrice);
router.post('/:PRODUCT_KEY/sellTablePrice',sellTablePrice);
module.exports = router;