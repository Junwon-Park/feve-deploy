const express = require('express');
const { body } = require('express-validator');
const { addPost, loadHashtag } = require('../../controller/style/addPost.js');

const router = express.Router();

router.post('/', addPost);

module.exports = router;
