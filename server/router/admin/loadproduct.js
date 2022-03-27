const express = require('express');
const { body } = require('express-validator');
const { loadproduct } = require('../../controller/admin/loadproduct.js');

const router = express.Router();

router.post('/', loadproduct);

module.exports = router;
