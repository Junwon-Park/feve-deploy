const express = require('express');
const { body } = require('express-validator');
const { cscenterinsert } = require('../../controller/cscenter/cscenterInsert.js');

const router = express.Router();

router.post('/', cscenterinsert);

module.exports = router;
