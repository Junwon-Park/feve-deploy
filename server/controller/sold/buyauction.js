const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function buyauction(req, res, next) {
  const productkey = req.body.productkey;
  console.log(productkey,"여기가 프로덕트 인데 왜 안들어오죠?");
  await db.sequelize
    .query(
    `SELECT buy_key,buy_edate,buy_sdate,buy_price from Buy
    WHERE buy_price = (select a.b from (SELECT MAX(buy_price) as b FROM Buy 
    where product_key =${productkey} AND buy_status=0) as a);`, {
        type: Sequelize.QueryTypes.SELECT
      }
    )
.then((result) => {
  res.json(result);
})
.catch((err) => console.log(err));


}

module.exports = { buyauction };

