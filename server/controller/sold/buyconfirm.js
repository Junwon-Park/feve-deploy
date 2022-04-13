const { Product } = require("../../models");
const sequelize = require("sequelize");


async function buyconfirm(req, res, next) {
  const productkey =req.params.PRODUCT_KEY;
  console.log(req.params.PRODUCT_KEY,"************************여기가 파람");
  await Product.findOne({
    attributes: ['PRODUCT_KEY','PRODUCT_BRAND', 'PRODUCT_NAME','PRODUCT_PIC','PRODUCT_CATE' ,'PRODUCT_ORIPRICE','PRODUCT_DESC'],
    where: {
      PRODUCT_KEY: productkey
    }
})
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { buyconfirm };

