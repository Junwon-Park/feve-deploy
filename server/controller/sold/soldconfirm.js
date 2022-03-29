const buy = require("../../models/buy")
const { Product } = require("../../models");

async function buyconfirm(req, res, next) {


  await Product.findAll({
    attributes: ['PRODUCT_KEY','PRODUCT_BRAND', 'PRODUCT_NAME','PRODUCT_MNUM','PRODUCT_LDATE','PRODUCT_PIC', 
    'PRODUCT_DESC', 'PRODUCT_ORIPRICE','PRODUCT_WDATE','PRODUCT_CATE'],
    where: {
      PRODUCT_KEY: 1
    }
})
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { buyconfirm };

