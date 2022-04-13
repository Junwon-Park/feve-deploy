const express = require('express');
const { getFavoriteList, deleteFavorite, getFavoriteListCount } = require('../../controller/mypage/mypageFavoriteList');

const router = express.Router();

router.post('/', getFavoriteList);
router.post('/delete', deleteFavorite);
router.post('/getCount', getFavoriteListCount);

module.exports = router;
