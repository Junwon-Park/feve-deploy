const { Product } = require("../../models");
const sequelize = require("sequelize");


async function sellconfirm(req, res, next) {
  const productkey =req.body.PRODUCT_KEY;
  console.log(productkey);
  await Product.findOne({
    attributes: ['PRODUCT_KEY','PRODUCT_BRAND', 'PRODUCT_NAME','PRODUCT_PIC','PRODUCT_CATE' ,'PRODUCT_ORIPRICE'],
    where: {
      PRODUCT_KEY: 1
    }
})
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { sellconfirm };

