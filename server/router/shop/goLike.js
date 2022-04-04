const express = require('express');
const { body } = require('express-validator');
const { goLike } = require('../../controller/shop/goLike.js');

const router = express.Router();

router.post('/', goLike);

module.exports = router;


