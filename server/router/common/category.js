const express = require('express');
const { body } = require('express-validator');
const { category } = require('../../controller/common/category.js');
const { secondCategory } = require('../../controller/common/secondCategory');

const router = express.Router();

router.get('/', category);
router.post('/second', secondCategory);

module.exports = router;
