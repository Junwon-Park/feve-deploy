const express = require('express');
const { body } = require('express-validator');
const { loadPost, loadAllPost, loadMyPost, loadFollowPost, countAllPost } = require('../../controller/style/loadPost.js');

const router = express.Router();

router.post('/', loadPost);
router.post('/all', loadAllPost);
router.post('/count', countAllPost);
router.post('/my', loadMyPost);
router.post('/follow', loadFollowPost);

module.exports = router;
