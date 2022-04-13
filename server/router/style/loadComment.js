const express = require('express');
const { body } = require('express-validator');
const { loadComment } = require('../../controller/style/loadComment.js');

const router = express.Router();

router.post('/', loadComment);

module.exports = router;
