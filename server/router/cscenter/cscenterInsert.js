const express = require('express');
const { body } = require('express-validator');
const { cscenterinsert } = require('../../controller/cscenter/cscenterInsert.js');
const { totalcscenter, cscenter } = require('../../controller/cscenter/cscenterList.js');

const router = express.Router();

router.post('/', cscenterinsert);
router.get('/totalCnt', totalcscenter);
router.post('/', cscenter);


module.exports = router;
