const express = require('express');
const { body } = require('express-validator');
const { loadinspection, loadTotalcntinspection, loadinspecone, loadinspectionLimit } = require('../../controller/admin/loadinspection.js');

const router = express.Router();

router.post('/', loadinspection);
router.get('/totalCnt', loadTotalcntinspection);
router.get('/limit', loadinspectionLimit);
router.post('/one', loadinspecone);

module.exports = router;
