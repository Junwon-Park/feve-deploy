const express = require('express');
const { body } = require('express-validator');
const { updateCscenter } = require('../../controller/admin/updateCscenter.js');

const router = express.Router();

router.post('/', updateCscenter);

module.exports = router;
