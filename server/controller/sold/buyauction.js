const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function buyauction(req, res, next) {
  const productkey = req.body.productkey;
  await db.sequelize
    .query(
    `SELECT buy_key,buy_edate,buy_sdate,buy_price from Buy
    WHERE buy_price = (select a.b from (SELECT MAX(buy_price) as b FROM Buy 
    where product_key =${productkey} ) as a) and buy_status=0;`, {
        type: Sequelize.QueryTypes.SELECT
      }
    )
.then((result) => {
  res.json(result);
})
.catch((err) => console.log(err));


}

module.exports = { buyauction };

