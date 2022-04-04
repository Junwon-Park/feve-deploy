const express = require('express');
const { getFavoriteList } = require('../../controller/mypage/mypageFavoriteList');

const router = express.Router();

router.post('/', getFavoriteList);

module.exports = router;
