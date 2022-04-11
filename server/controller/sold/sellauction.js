const { Sell } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function sellauction(req, res, next) {
  // let user = req.body.USER_KEY; 
  await db.sequelize
    .query(
    `SELECT SELL_KEY,SELL_EDATE,SELL_SDATE,SELL_PRICE from SELL
    WHERE sell_price = (select a.b from (SELECT MIN(sell_price) as b FROM sell 
    where product_key =1 AND sell_status=0) as a);`, {
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

