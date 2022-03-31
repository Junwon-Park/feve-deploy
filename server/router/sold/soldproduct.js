const express = require('express');

const { soldproduct } = require("../../controller/sold/soldproduct.js");

const router = express.Router();

router.post("/", soldproduct);

module.exports = router;
