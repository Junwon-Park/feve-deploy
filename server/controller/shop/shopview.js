const { Product } = require("../../models");
const { Sell } = require("../../models");
const { Buy } = require("../../models");
const db = require('../../models');
const sequelize = require("sequelize");

async function shopview(req, res, next) {
  const product_key = req.params.PRODUCT_KEY;
  //console.log("product_key는???????????",product_key);

  await db.sequelize.query(
    'SELECT DISTINCT\n' +
        'a.PRODUCT_KEY \n' +
        ',a.PRODUCT_BRAND \n' +
        ',a.PRODUCT_NAME \n' +
        ',a.PRODUCT_MNUM \n' +
        ',a.PRODUCT_LDATE \n' +
        ',a.PRODUCT_PIC \n' +
        ',a.PRODUCT_PIC2 \n' +
        ',a.PRODUCT_PIC3 \n' +
        ',a.PRODUCT_DESC \n' +
        ',a.PRODUCT_ORIPRICE \n' +
        ',a.PRODUCT_WDATE\n' +
        ',a.PRODUCT_CATE\n' +
        ',(SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = ' + product_key + ' AND SELL_STATUS=0) as SELL_PRICE \n' +
        ',(SELECT MAX(BUY_PRICE) FROM Buy WHERE PRODUCT_KEY = ' + product_key + ' AND BUY_STATUS=0) as BUY_PRICE \n' +
    'FROM Product a\n' +
    'WHERE a.PRODUCT_KEY = '+ product_key + ';'
    , { type: sequelize.QueryTypes.SELECT })
//   await Product.findOne({
//     where: {
//       PRODUCT_KEY: product_key
//     },
//     include:[
//               {
//                   model: Sell,
//                   attributes:[[sequelize.fn('min', sequelize.col('SELL_PRICE')),'SELL_PRICE']],
//                   where: {SELL_STATUS:'0'},
//                   required: false
//               },
//               {
//                 model: Buy,
//                 attributes:[[sequelize.fn('max', sequelize.col('BUY_PRICE')),'BUY_PRICE']],
//                 where: {BUY_STATUS:'0'},
//                 required: false
//             }
//           ]
// })
    .then(result => {
        //console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { shopview };

