const express = require('express');
const { body } = require('express-validator');
const { cscenter } = require('../../controller/admin/cscenter.js');
const { cscenterone } = require('../../controller/admin/cscenterone.js');

const router = express.Router();

router.get('/', cscenter);
router.post('/one', cscenterone);

module.exports = router;
