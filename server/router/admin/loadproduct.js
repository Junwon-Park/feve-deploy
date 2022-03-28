const express = require('express');
const { body } = require('express-validator');
const { loadproduct } = require('../../controller/admin/loadproduct.js');
const { loadproductLimit } = require('../../controller/admin/loadproductLimit.js');

const router = express.Router();

router.get('/', loadproduct);
router.get('/limit', loadproductLimit);

module.exports = router;
