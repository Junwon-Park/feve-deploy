const express = require('express');
const { body } = require('express-validator');
const { deleteProduct } = require('../../controller/admin/deleteProduct.js');
const { undoDeleteProduct } = require('../../controller/admin/undoDeleteProduct.js');

const router = express.Router();

router.post('/', deleteProduct);
router.post('/undo', undoDeleteProduct);

module.exports = router;
