const { Product } = require("../../models");
const sequelize = require("sequelize");


async function buyconfirm(req, res, next) {
  const productkey =req.params.PRODUCT_KEY;
  console.log("*********************** 여기서부터 확인해보자!!!!!!!!!********************",productkey,req.body.PRODUCT_KEY);
  console.log(req);
  await Product.findOne({
    attributes: ['PRODUCT_KEY','PRODUCT_BRAND', 'PRODUCT_NAME','PRODUCT_PIC','PRODUCT_CATE' ,'PRODUCT_ORIPRICE'],
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

