const express = require('express');
const { getFavoriteList, deleteFavorite } = require('../../controller/mypage/mypageFavoriteList');

const router = express.Router();

router.post('/', getFavoriteList);
router.post('/delete', deleteFavorite);

module.exports = router;
