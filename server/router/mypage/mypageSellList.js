const express = require('express');
const { getSellCounts } = require('../../controller/mypage/mypageSellList');
const { getWaitSellList } = require('../../controller/mypage/mypageSellList');
const { getProgressSellList } = require('../../controller/mypage/mypageSellList');
const { getDoneSellList } = require('../../controller/mypage/mypageSellList');

const router = express.Router();

router.post('/getSellCounts', getSellCounts);
router.post('/getWaitSellList', getWaitSellList);
router.post('/getProgressSellList', getProgressSellList);
router.post('/getDoneSellList', getDoneSellList);

module.exports = router;
