const express = require('express');
const { body } = require('express-validator');
const { updateInspection } = require('../../controller/admin/updateInspection.js');

const router = express.Router();

router.post('/', updateInspection);

module.exports = router;
