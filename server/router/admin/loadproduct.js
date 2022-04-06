const express = require('express');
const { body } = require('express-validator');
const { loadproduct, loadTotalcntProduct } = require('../../controller/admin/loadproduct.js');
const { loadproductLimit } = require('../../controller/admin/loadproductLimit.js');
const { loadproductone } = require('../../controller/admin/loadproductone.js');

const router = express.Router();

router.post('/', loadproduct);
router.get('/totalCnt', loadTotalcntProduct);
router.get('/limit', loadproductLimit);
router.post('/one',loadproductone);

module.exports = router;
