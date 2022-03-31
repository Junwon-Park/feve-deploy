const { buy } = require("../../models/");
const { Product } = require("../../models");

async function buyconfirm(req, res, next) {
  await Product.findOne({
    attributes: ['PRODUCT_KEY','PRODUCT_BRAND', 'PRODUCT_NAME','PRODUCT_PIC','PRODUCT_CATE'],
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
module.exports = { buyconfirm };

