const express = require('express');
const { getProfile } = require('../../controller/mypage/mypageProfile');
const { updateProfile } = require('../../controller/mypage/mypageProfile');

const router = express.Router();

router.post('/', getProfile);
router.post('/save', updateProfile);

module.exports = router;
