const express = require('express');
const { getProfile } = require('../../controller/mypage/mypageProfile');

const router = express.Router();

router.post('/', getProfile);

module.exports = router;
