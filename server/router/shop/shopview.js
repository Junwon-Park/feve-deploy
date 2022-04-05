const express = require('express');
const { body } = require('express-validator');
const { shopview } = require('../../controller/shop/shopview.js');
const { goLike } = require('../../controller/shop/goLike.js');
const { goDislike } = require('../../controller/shop/goDislike.js');
const { countLike } = require('../../controller/shop/countLike.js');

const router = express.Router();

router.get('/:PRODUCT_KEY', shopview);
router.post('/:PRODUCT_KEY/goLike',goLike);
router.post('/:PRODUCT_KEY/goDislike',goDislike);
router.post('/:PRODUCT_KEY/countLike',countLike);
module.exports = router;