const express = require('express');
const { body } = require('express-validator');
const { deleteProduct } = require('../../controller/admin/deleteProduct.js');

const router = express.Router();

router.post('/', deleteProduct);

module.exports = router;
