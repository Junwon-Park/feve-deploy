const express = require('express');
const { body } = require('express-validator');
const { addproduct } = require('../../controller/admin/addproduct.js');

const router = express.Router();

router.post('/', addproduct);

module.exports = router;
