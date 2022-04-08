const { Buy } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function buyupdatefail(req, res, next){
  let user_key = req.body.user_key; //키 받아오기
  let buy_key = req.body.buy_key; //키받아오기
  console.log("바이키",buy_key);
  console.log("유저키",user_key);

  await db.sequelize
  .query(
     `UPDATE Buy SET
      BUY_STATUS = 2,
      where BUY_EDATE = now()`
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

