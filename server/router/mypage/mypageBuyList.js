const express = require('express');
const { getBuyCounts } = require('../../controller/mypage/mypageBuyList');
const { getWaitBuyList } = require('../../controller/mypage/mypageBuyList');
const { getProgressBuyList } = require('../../controller/mypage/mypageBuyList');
const { getDoneBuyList } = require('../../controller/mypage/mypageBuyList');

const router = express.Router();

router.post('/getBuyCounts', getBuyCounts);
router.post('/getWaitBuyList', getWaitBuyList);
router.post('/getProgressBuyList', getProgressBuyList);
router.post('/getDoneBuyList', getDoneBuyList);

module.exports = router;
