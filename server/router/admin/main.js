const express = require('express');
const { body } = require('express-validator');
const { countUser, countDeal, countBidSell, countBidBuy } = require('../../controller/admin/count.js');
const { countTotalUser, countTotalBuy, countTotalSell, countTotalDeal } = require('../../controller/admin/countTotal.js');
const { beforeCountTotalBuy, beforeCountTotalUser, beforeCountTotalSell, beforeCountTotalDeal } = require('../../controller/admin/beforeCountTotal.js');


const router = express.Router();

router.get('/user', countUser);
router.get('/deal', countDeal);
router.get('/bid/sell', countBidSell);
router.get('/bid/buy', countBidBuy);

router.get('/user/total', countTotalUser);
router.get('/buy/total', countTotalBuy);
router.get('/sell/total', countTotalSell);
router.get('/deal/total', countTotalDeal);

router.get('/bef/user/total', beforeCountTotalUser);
router.get('/bef/buy/total', beforeCountTotalBuy);
router.get('/bef/sell/total', beforeCountTotalSell);
router.get('/bef/deal/total', beforeCountTotalDeal);

module.exports = router;
