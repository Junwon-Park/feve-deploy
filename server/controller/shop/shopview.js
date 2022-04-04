const { Product } = require("../../models");
const { Sell } = require("../../models");
const { Buy } = require("../../models");
const sequelize = require("sequelize");

async function shopview(req, res, next) {
  const product_key = req.params.PRODUCT_KEY;
  console.log("product_key는???????????",product_key);
  
  await Product.findOne({
    where: {
      PRODUCT_KEY: product_key
    },
    include:[
              {
                  model: Sell,
                  attributes:[[sequelize.fn('min', sequelize.col('SELL_PRICE')),'SELL_PRICE']],
                  where: {SELL_STATUS:'0'},
                  required: false
              },
              {
                model: Buy,
                attributes:[[sequelize.fn('max', sequelize.col('BUY_PRICE')),'BUY_PRICE']],
                where: {BUY_STATUS:'0'},
                required: false
            }
          ]
})
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { shopview };

