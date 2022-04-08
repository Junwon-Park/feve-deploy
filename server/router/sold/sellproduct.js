const express = require('express');
const { sellproduct } = require("../../controller/sold/sellproduct.js");
const router = express.Router();

router.post("/", sellproduct);


module.exports = router;
