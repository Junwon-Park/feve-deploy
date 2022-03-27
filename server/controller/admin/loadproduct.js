const { Product } = require("../../models");
const db = require("../../models");

async function loadproduct(req, res, next) {

    await Product.findAll({
        attributes: ['PRODUCT_BRAND', 'PRODUCT_NAME', 'PRODUCT_CATE', 'PRODUCT_ORIPRICE'],
    })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { loadproduct };