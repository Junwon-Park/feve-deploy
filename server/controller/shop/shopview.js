const { Product } = require("../../models");

async function shopview(req, res, next) {
  const product_key = req.params.PRODUCT_KEY;
  console.log("product_key는???????????",product_key);
  
  await Product.findOne({
    where: {
      PRODUCT_KEY: product_key
    }
})
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}
module.exports = { shopview };

