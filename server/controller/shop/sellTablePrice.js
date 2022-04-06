const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function sellTablePrice(req, res, next) {

    console.log("**********************SellTablePrice Query*********************");
    const product_key = 1;
    // const product_key = req.body.PRODUCT_KEY;
    console.log(product_key);

    await db.sequelize.query(
        'SELECT \n' +
            'SELL_PRICE, \n' +
            'COUNT(SELL_PRICE)\n' +
        'FROM Sell \n' +
        'GROUP BY PRODUCT_KEY = '+ 
        product_key + ';'
        , { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { sellTablePrice };