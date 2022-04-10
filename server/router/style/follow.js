const express = require('express');
const { body } = require('express-validator');
const { follow, unfollow, isfollow, followerCount, followingCount, loadFollower, loadFollowing } = require('../../controller/style/follow.js');

const router = express.Router();

router.post('/', follow);
router.post('/unfollow', unfollow);
router.post('/isfollow', isfollow);
router.post('/count/follower', followerCount);
router.post('/count/following', followingCount);
router.post('/loadFollower', loadFollower);
router.post('/loadFollowing', loadFollowing);

module.exports = router;
