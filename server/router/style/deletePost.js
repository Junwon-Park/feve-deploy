const express = require('express');
const { body } = require('express-validator');
const { deletePost } = require('../../controller/style/deletePost.js');

const router = express.Router();

router.post('/', deletePost);

module.exports = router;
