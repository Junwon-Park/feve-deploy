const { Sell } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function sellauction(req, res, next) {
  const productkey = req.body.productkey;
  await db.sequelize
    .query(
      `SELECT SELL_KEY,SELL_EDATE,SELL_SDATE,SELL_PRICE,SELL_SELLER_KEY,SELL_BUYER_KEY from SELL
      WHERE SELL_PRICE = (select A.B from (SELECT MIN(SELL_PRICE) as B FROM SELL 
      where product_key =${productkey} and sell_status=0 ) as A) and sell_status=0;`, {
        type: Sequelize.QueryTypes.SELECT
      }
    )
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}

module.exports = { sellauction };

