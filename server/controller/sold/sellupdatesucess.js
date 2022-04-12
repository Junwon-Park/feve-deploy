const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function sellupdatesucess(req, res, next){
  let user_key = req.body.user_key;
  let sellkey = req.body.seller_key;

  await db.sequelize
    .query(
     `UPDATE Sell SET
       SELL_STATUS = 3,
       SELL_BUYER_KEY = ${user_key},
       SELL_EDATE = now()
       where SELL_KEY = ${sellkey}`, {
          type: Sequelize.QueryTypes.UPDATE
        }
  )
.then((result) => {
  console.log(result,"콘솔로그값");
  res.json(result);
})
.catch((err) => console.log(err));
}


// async function updatefail(req, res, next)
// {
//   await Buy.update(
//     {
//         BUY_STATUS: 2,
//     }, {
//         where: {
//             BUY_PRICE: maxprice,
//             product_key: 1
//         }
//     }
//   )
//   .then(result => {
//     console.log(result);
//     res.json(result);
//   })
//   .catch(err => console.log(err));
// }
module.exports = { sellupdatesucess };

