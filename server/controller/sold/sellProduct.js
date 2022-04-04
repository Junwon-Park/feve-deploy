const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
 async function soldproduct(req, res, next) {
  const sell_price = req.body.sell_price;
  const sell_sdate = req.body.sell_sdate;
  const sell_edate = req.body.sell_edate;
  const sell_status = req.body.sell_status;
  const product_key = req.body.product_key;
  const sell_buyer_key = req.body.buy_buyer_key;
  const sell_seller_key = req.body.sell_seller_key;

   await Sell.create({
     SELL_PRICE: sell_price,
     SELL_SDATE: sell_sdate,
     SELL_EDATE: sell_edate,
     SELL_STATUS: sell_status,
     PRODUCT_KEY: product_key,
     SELL_BUYER_KEY: sell_buyer_key,
     SELL_SELLER_KEY:sell_seller_key,
   }).then(result =>{
       console.log(result);
       console.log(result.BUY_EDATE);
       res.send(result);
     })
     .catch(err => console.log(err));
 }


module.exports = { soldproduct };