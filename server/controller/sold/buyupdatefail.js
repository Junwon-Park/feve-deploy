const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function buyupdatefail(req, res, next){


  await db.sequelize
  .query(
     `UPDATE Buy SET
      BUY_STATUS = 2,
      BUY_EDATE = now()
      where BUY_EDATE < now() AND BUY_STATUS=0`
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
module.exports = { buyupdatefail };

