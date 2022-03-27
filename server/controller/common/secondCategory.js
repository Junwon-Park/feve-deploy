const { Category } = require("../../models");
const db = require("../../models");

async function secondCategory(req, res, next) {
    const product_brand= req.body.product_brand;
    await Category.findAll({
        attributes: ['CATEGORY_KEY', 'CATEGORY_DESC'],
        where: {
            CATEGORY_PARENT: product_brand
        }
    })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { secondCategory };