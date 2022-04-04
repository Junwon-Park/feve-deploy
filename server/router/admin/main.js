const express = require('express');
const { body } = require('express-validator');
const { countUser } = require('../../controller/admin/countUser.js');
const { countSell } = require('../../controller/admin/countSell.js');
const { countTotalUser } = require('../../controller/admin/countTotalUser.js');
const { countTotalBuy } = require('../../controller/admin/countTotalBuy.js');
const { countTotalSell } = require('../../controller/admin/countTotalSell.js');
const { countTotalDeal } = require('../../controller/admin/countTotalDeal.js');

const router = express.Router();

router.get('/user', countUser);
router.get('/sell', countSell);
router.get('/user/total', countTotalUser);
router.get('/buy/total', countTotalBuy);
router.get('/sell/total', countTotalSell);
router.get('/deal/total', countTotalDeal);

module.exports = router;
