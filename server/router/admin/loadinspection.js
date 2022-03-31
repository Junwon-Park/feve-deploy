const express = require('express');
const { body } = require('express-validator');
const { loadinspection } = require('../../controller/admin/loadinspection.js');
const { loadinspectionLimit } = require('../../controller/admin/loadinspectionLimit.js');
const { loadinspecone } = require('../../controller/admin/loadinspecone.js');

const router = express.Router();

router.get('/', loadinspection);
router.get('/limit', loadinspectionLimit);
router.post('/one', loadinspecone);

module.exports = router;
