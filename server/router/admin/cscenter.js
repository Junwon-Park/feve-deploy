const express = require('express');
const { body } = require('express-validator');
const { cscenter, totalcscenter } = require('../../controller/admin/cscenter.js');
const { cscenterone } = require('../../controller/admin/cscenterone.js');

const router = express.Router();

router.post('/', cscenter);
router.get('/totalCnt', totalcscenter);
router.post('/one', cscenterone);

module.exports = router;
