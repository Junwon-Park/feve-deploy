const { Buy } = require("../../models");
const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function recentPrice(req, res, next) {

    //console.log("**********************recentPrice Query*********************");
    const product_key = req.body.product_key;
    //console.log(product_key);

    await db.sequelize.query(
        '(SELECT \n' +
            'SELL_PRICE, \n' +
            'SELL_EDATE \n' +
        'FROM Sell \n' +
        'WHERE SELL_STATUS = 1 '+'AND PRODUCT_KEY = '+ product_key + 
        ') UNION ('+
        'SELECT \n' +
            'BUY_PRICE, \n' +
            'BUY_EDATE \n' +
        'FROM Buy \n' +
        'WHERE BUY_STATUS = 1 '+'AND PRODUCT_KEY = '+ product_key + 
        ') ORDER BY SELL_EDATE DESC ;'
        , { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            //console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { recentPrice };