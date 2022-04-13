const { Category } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function category(req, res, next) {
    await Category.findAll({
        attributes: ['CATEGORY_KEY', 'CATEGORY_DESC', 'CATEGORY_NAME'],
        where: {
            [Op.or]: [{ CATEGORY_NAME: "le" }, { CATEGORY_NAME: "be" }]
        }
    })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { category };