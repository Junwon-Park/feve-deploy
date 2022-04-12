const express = require('express');
const { getSellCounts, updateDeliver } = require('../../controller/mypage/mypageSellList');
const { getWaitSellList, getProgressSellList, getDoneSellList } = require('../../controller/mypage/mypageSellList');
const { getWaitSellListCount, getProgressSellListCount, getDoneSellListCount } = require('../../controller/mypage/mypageSellList');

const router = express.Router();

router.post('/getSellCounts', getSellCounts);
router.post('/getWaitSellList', getWaitSellList);
router.post('/getProgressSellList', getProgressSellList);
router.post('/getDoneSellList', getDoneSellList);

router.post('/getWaitSellListCount', getWaitSellListCount);
router.post('/getProgressSellListCount', getProgressSellListCount);
router.post('/getDoneSellListCount', getDoneSellListCount);
router.post('/deliver', updateDeliver);


module.exports = router;
