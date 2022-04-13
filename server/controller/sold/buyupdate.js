const { Buy } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

async function updatesucess(req, res, next){
  let product = req.body.PRODUCT_KEY;
  let price = req.body.BUY_PRICE;
    console.log(price);
    //  await Buy.findOne({
    //   attributes: [sequelize.fn('max', sequelize.col('BUY_PRICE')),'BUY_PRICE'],
    //   where: {
    //     product_key : 1
    //   }

    // }).then(result => {
    //   console.log(result);

    //   res.json(result);
    // })
    // .catch(err => console.log(err));

    // console.log(maxprice);
    await Buy.update(
      
      {
          BUY_STATUS: 2,
      }, {
          where: {
              BUY_PRICE:price,
              product_key: 1
          }
      }
    )
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => console.log(err));
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
module.exports = { updatesucess };

