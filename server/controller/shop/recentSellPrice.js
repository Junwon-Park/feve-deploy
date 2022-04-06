const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function recentSellPrice(req, res, next) {
    
    console.log("**********************recentSellPrice Query*********************");
    const product_key = req.body.product_key;
    console.log(product_key);

    await db.sequelize.query(
        'SELECT \n' +
            'SELL_PRICE, \n' +
            'SELL_EDATE \n' +
        'FROM Sell \n' +
        'WHERE SELL_STATUS = 1 '+
        'AND PRODUCT_KEY = '+ 
        product_key + 
        ' ORDER BY SELL_EDATE DESC LIMIT 1;'
        , { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { recentSellPrice };