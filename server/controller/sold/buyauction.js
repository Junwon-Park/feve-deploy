const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


async function buyauction(req, res, next) {
  await db.sequelize
    .query(
    `SELECT buy_key,buy_edate,buy_sdate,buy_price from Buy
    WHERE buy_price = (select a.b from (SELECT MAX(buy_price) as b FROM Buy 
    where product_key =1 AND buy_status=0) as a);`, {
        type: Sequelize.QueryTypes.SELECT
      }
    )
.then((result) => {
  console.log(result,"asdfasdfasdfsadfsadfasdfsd");
  console.log("여기타고 들어왔다")
  res.json(result);
})
.catch((err) => console.log(err));


}

module.exports = { buyauction };

