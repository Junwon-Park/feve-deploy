const express = require('express');

const { buyproduct } = require("../../controller/sold/buyproduct.js");
const router = express.Router();

router.post("/", buyproduct);


module.exports = router;
