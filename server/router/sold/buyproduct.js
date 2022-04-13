const express = require('express');

const { buyproduct } = require("../../controller/sold/buyproduct.js");
const router = express.Router();

router.post("/", buyproduct); //buy 추가하는부분


module.exports = router;
