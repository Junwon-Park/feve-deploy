const { Buy } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
 async function soldproduct(req, res, next) {
  const buy_price = req.body.buy_price;
  const buy_sdate = req.body.buy_sdate;
  const buy_edate = req.body.buy_edate;
  const buy_status = req.body.buy_status;
  const product_key = req.body.product_key;
  const buy_buyer_key = req.body.buy_buyer_key;
  const buy_seller_key = req.body.buy_seller_key;

   await Buy.create({
     BUY_PRICE: buy_price,
     BUY_SDATE: buy_sdate,
     BUY_EDATE: buy_edate,
     BUY_STATUS: buy_status,
     PRODUCT_KEY: product_key,
     BUY_BUYER_KEY: buy_buyer_key,
     BUY_SELLER_KEY:buy_seller_key,
   }).then(result =>{
       console.log(result);
       console.log(result.BUY_EDATE);
       res.send(result);
     })
     .catch(err => console.log(err));
 }


module.exports = { soldproduct };