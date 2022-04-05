const express = require('express');
const { body } = require('express-validator');
const { loadproduct } = require('../../controller/main/loadproduct.js');
const { loadNewproduct } = require('../../controller/main/loadNewproduct.js');

const router = express.Router();

router.get('/', loadproduct);
router.get('/new', loadNewproduct);

module.exports = router;
