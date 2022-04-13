const express = require('express');
const { body } = require('express-validator');
const { loadproduct, loadTotalcntProduct, loadproductLimit, loadproductone } = require('../../controller/admin/loadproduct.js');

const router = express.Router();

router.post('/', loadproduct);
router.get('/totalCnt', loadTotalcntProduct);
router.get('/limit', loadproductLimit);
router.post('/one',loadproductone);

module.exports = router;
