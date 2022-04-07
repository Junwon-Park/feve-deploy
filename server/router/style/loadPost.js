const express = require('express');
const { body } = require('express-validator');
const { loadPost } = require('../../controller/style/loadPost.js');

const router = express.Router();

router.get('/', loadPost);
// router.get('/totalCnt', loadTotalcntProduct);
// router.get('/limit', loadproductLimit);
// router.post('/one',loadproductone);

module.exports = router;
