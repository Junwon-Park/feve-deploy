const express = require('express');
const { body } = require('express-validator');
const { follow, followerCount, followingCount } = require('../../controller/style/follow.js');

const router = express.Router();

router.post('/', follow);
router.post('/count/follower', followerCount);
router.post('/count/following', followingCount);

module.exports = router;
