const express = require('express');
const { body } = require('express-validator');
const { updateProduct } = require('../../controller/admin/updateProduct.js');

const router = express.Router();

router.post('/', updateProduct);

module.exports = router;
