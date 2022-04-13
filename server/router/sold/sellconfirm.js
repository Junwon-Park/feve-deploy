const express = require('express');
const { body } = require('express-validator');
const { sellconfirm } = require("../../controller/sold/sellconfirm.js");
const { sellauction } = require("../../controller/sold/sellauction.js");
const { selluser } = require('../../controller/sold/selluser.js');
const { sellupdatesucess } = require("../../controller/sold/sellupdatesucess.js");
const { sellupdatefail }  =  require('../../controller/sold/sellupdatefail.js')
const router = express.Router();

router.get('/:PRODUCT_KEY', sellconfirm);
router.post('/comp' ,sellauction);
router.post('/comp/user', selluser);
router.post('/update',sellupdatesucess);

router.post('/updatefail',sellupdatefail);


module.exports = router;
