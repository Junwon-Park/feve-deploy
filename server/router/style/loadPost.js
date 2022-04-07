const express = require('express');
const { body } = require('express-validator');
const { loadPost, loadAllPost } = require('../../controller/style/loadPost.js');

const router = express.Router();

router.post('/', loadPost);
router.get('/all', loadAllPost);
// router.get('/limit', loadproductLimit);
// router.post('/one',loadproductone);

module.exports = router;
