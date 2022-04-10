const express = require('express');
const { body } = require('express-validator');
const { cscenterinsert } = require('../../controller/cscenter/cscenterInsert.js');
const { totalcscenter, cscenter, cscenterone } = require('../../controller/cscenter/cscenterList.js');

const router = express.Router();

router.post('/', cscenterinsert);
router.get('/totalCnt', totalcscenter);
router.post('/cscenter', cscenter);
router.post('/one', cscenterone);


module.exports = router;
