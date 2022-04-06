const { Buy } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function recentBuyPrice(req, res, next) {

    console.log("**********************recentBuyPrice Query*********************");
    const product_key = req.body.product_key;
    console.log(product_key);

    await db.sequelize.query(
        'SELECT \n' +
            'BUY_PRICE, \n' +
            'BUY_EDATE \n' +
        'FROM Buy \n' +
        'WHERE BUY_STATUS = 1 '+
        'AND PRODUCT_KEY = '+ 
        product_key + 
        ' ORDER BY BUY_EDATE DESC LIMIT 1;'
        , { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { recentBuyPrice };