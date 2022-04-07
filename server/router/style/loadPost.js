const express = require('express');
const { body } = require('express-validator');
const { loadPost, loadAllPost, countAllPost } = require('../../controller/style/loadPost.js');

const router = express.Router();

router.post('/', loadPost);
router.post('/all', loadAllPost);
router.post('/count', countAllPost);
// router.post('/one',loadproductone);

module.exports = router;
