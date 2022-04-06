const express = require('express');
const { body } = require('express-validator');
const { loadinspection, loadTotalcntinspection } = require('../../controller/admin/loadinspection.js');
const { loadinspectionLimit } = require('../../controller/admin/loadinspectionLimit.js');
const { loadinspecone } = require('../../controller/admin/loadinspecone.js');

const router = express.Router();

router.post('/', loadinspection);
router.get('/totalCnt', loadTotalcntinspection);
router.get('/limit', loadinspectionLimit);
router.post('/one', loadinspecone);

module.exports = router;
