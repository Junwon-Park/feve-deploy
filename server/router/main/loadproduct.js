const express = require('express');
const { body } = require('express-validator');
const { loadproduct } = require('../../controller/main/loadproduct.js');

const router = express.Router();

router.get('/', loadproduct);

module.exports = router;
