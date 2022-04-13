const express = require('express');
const { body } = require('express-validator');
const { cscenter, totalcscenter, cscenterone } = require('../../controller/admin/cscenter.js');

const router = express.Router();

router.post('/', cscenter);
router.get('/totalCnt', totalcscenter);
router.post('/one', cscenterone);

module.exports = router;
