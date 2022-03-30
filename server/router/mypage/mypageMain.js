const express = require('express');
const { getSimpleUserInfo } = require('../../controller/mypage/mypageMain');

const router = express.Router();

router.post('/getSimpleUserInfo', getSimpleUserInfo);

module.exports = router;
