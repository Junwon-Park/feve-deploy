const express = require('express');
const { getSimpleUserInfo } = require('../../controller/mypage/mypageMain');
const { getBuyCounts } = require('../../controller/mypage/mypageMain');
const { getSellCounts } = require('../../controller/mypage/mypageMain');
const { getSimpleFavorites } = require('../../controller/mypage/mypageMain');

const router = express.Router();

router.post('/getSimpleUserInfo', getSimpleUserInfo);
router.post('/getBuyCounts', getBuyCounts);
router.post('/getSellCounts', getSellCounts);
router.post('/getSimpleFavorites', getSimpleFavorites);


module.exports = router;
