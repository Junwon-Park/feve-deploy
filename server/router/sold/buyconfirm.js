const express = require('express');
const { body } = require('express-validator');
const { buyconfirm } = require("../../controller/sold/buyconfirm.js");
const { buyauction } = require("../../controller/sold/buyacution.js");
const { buyUser } = require('../../controller/sold/buyuser.js');
const { updatesucess } = require("../../controller/sold/buyupdate.js");
const router = express.Router();

router.get('/');
router.post('/', buyconfirm);
router.get('/comp');
router.post('/comp' ,buyauction);
router.post('/comp/user', buyUser);
router.get('/update',updatesucess);

module.exports = router;
