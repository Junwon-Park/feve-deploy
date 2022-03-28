const express = require('express');
const { body } = require('express-validator');
const { buyconfirm } = require("../../controller/sold/soldconfirm.js");


const router = express.Router();

router.get('/', buyconfirm);

module.exports = router;
