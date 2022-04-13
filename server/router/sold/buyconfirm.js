const express = require('express');
const { body } = require('express-validator');
const { buyconfirm } = require("../../controller/sold/buyconfirm.js");
const { buyauction } = require("../../controller/sold/buyauction.js");
const { buyUser } = require('../../controller/sold/buyuser.js');
const { buyupdatesucess } = require("../../controller/sold/buyupdatesucess.js");
const { buyupdatefail } = require("../../controller/sold/buyupdatefail.js");
const router = express.Router();

router.get('/:PRODUCT_KEY', buyconfirm);
router.post('/comp/' ,buyauction);
router.post('/comp/user', buyUser);
router.post('/update',buyupdatesucess);
router.post('/updatefail',buyupdatefail);

module.exports = router;
