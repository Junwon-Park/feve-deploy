const express = require('express');
const { body } = require('express-validator');
const { addComment, commentCount } = require('../../controller/style/addComment.js');

const router = express.Router();

router.post('/', addComment);
router.post('/count', commentCount);

module.exports = router;
