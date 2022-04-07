const express = require('express');
const { getBuyCounts } = require('../../controller/mypage/mypageBuyList');
const { getWaitBuyList, getProgressBuyList, getDoneBuyList } = require('../../controller/mypage/mypageBuyList');
const { getWaitBuyListCount, getProgressBuyListCount, getDoneBuyListCount } = require('../../controller/mypage/mypageBuyList');

const router = express.Router();

router.post('/getBuyCounts', getBuyCounts);
router.post('/getWaitBuyList', getWaitBuyList);
router.post('/getProgressBuyList', getProgressBuyList);
router.post('/getDoneBuyList', getDoneBuyList);

router.post('/getWaitBuyListCount', getWaitBuyListCount);
router.post('/getProgressBuyListCount', getProgressBuyListCount);
router.post('/getDoneBuyListCount', getDoneBuyListCount);

module.exports = router;
