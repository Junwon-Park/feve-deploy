const express = require('express');
const { getSimpleUserInfo, getBuyCounts, getSellCounts, getSimpleFavoriteList } = require('../../controller/mypage/mypageMain');

const router = express.Router();

router.post('/getSimpleUserInfo', getSimpleUserInfo);
router.post('/getBuyCounts', getBuyCounts);
router.post('/getSellCounts', getSellCounts);
router.post('/getSimpleFavoriteList', getSimpleFavoriteList);

module.exports = router;
