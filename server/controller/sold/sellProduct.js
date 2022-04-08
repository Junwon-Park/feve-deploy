const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

 async function sellproduct(req, res, next) {
  const SELL_PRICE = req.body.sell_price;
  const SELL_SDATE = req.body.sell_sdate;
  const SELL_EDATE = req.body.sell_edate;
  const SELL_STATUS = req.body.sell_status;
  const Product_key = req.body.product_key;
  const sell_buyer_key = req.body.sell_buyer_key;
  const sell_seller_key = req.body.sell_seller_key;

  console.log(Product_key,"sell price 가격은 ?!");

  


   await Sell.create({
     sell_price: SELL_PRICE,
     sell_sdate: SELL_SDATE,
     sell_edate: SELL_EDATE,
     sell_status: SELL_STATUS,
     PRODUCT_KEY: Product_key,
     SELL_SELLER_KEY:sell_seller_key,
     SELL_BUYER_KEY: sell_buyer_key,
   }).then(result =>{
       console.log(result);
       console.log(result);
       res.send(result);
     })
     .catch(err => console.log(err));
 }


module.exports = { sellproduct };