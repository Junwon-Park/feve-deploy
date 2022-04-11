const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function sellupdatefail(req, res, next){


  await db.sequelize
  .query(
     `UPDATE SELL SET
      SELL_STATUS = 2,
      SELL_EDATE = now()
      where SELL_EDATE < now() AND SELL_STATUS=0`
      ,{ type: Sequelize.QueryTypes.UPDATE }
  )
.then((result) => {
  console.log(result);
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
module.exports = { sellupdatefail };

