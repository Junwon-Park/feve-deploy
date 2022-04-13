const { Sell } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function sellauction(req, res, next) {
  const productkey = req.body.productkey;
  await db.sequelize
    .query(
      `SELECT SELL_KEY,SELL_EDATE,SELL_SDATE,SELL_PRICE from SELL
      WHERE SELL_PRICE = (select a.b from (SELECT MIN(SELL_PRICE) as b FROM SELL 
      where product_key =${productkey} ) as a) and sell_status=0;`, {
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

