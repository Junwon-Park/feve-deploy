const { Product } = require("../../models");
const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");

async function getPrices(req, res, next) {

  console.log("***********************************************************")
  const product_key = req.body.PRODUCT_KEY;
  console.log("product_key는???????????",product_key);
  
  await db.sequelize.query(
    'SELECT MIN(SELL_PRICE) FROM Sell WHERE SELL_STATUS=0' +
    'AND WHERE PRODUCT_KEY = '+
    product_key + ';'
    , { type: sequelize.QueryTypes.SELECT })
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));
}
module.exports = { getPrices };

