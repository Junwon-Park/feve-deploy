const express = require('express');
const { getCscenterList } = require('../../controller/cscenter/cscenter');

const router = express.Router();

router.post('/getCscenterList', getCscenterList);

module.exports = router;

