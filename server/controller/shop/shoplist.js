const { Product } = require("../../models");
const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function shoplist(req, res, next) {
    const start = req.body.limitStart;
    const end = req.body.limitEnd;

    await db.sequelize.query(
        'SELECT \n' +
            'a.PRODUCT_KEY \n' +
            ',a.PRODUCT_BRAND \n' +
            ',a.PRODUCT_NAME \n' +
            ',a.PRODUCT_MNUM \n' +
            ',a.PRODUCT_LDATE \n' +
            ',a.PRODUCT_PIC \n' +
            ',a.PRODUCT_DESC \n' +
            ',a.PRODUCT_ORIPRICE \n' +
            ',a.PRODUCT_WDATE\n' +
            ',a.PRODUCT_CATE\n' +
            ',(SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0)AS SELL_PRICE\n' +
        'FROM \n' +
        '(SELECT \n' +
            'a.PRODUCT_KEY \n' +
            ',a.PRODUCT_BRAND \n' +
            ',a.PRODUCT_NAME \n' +
            ',a.PRODUCT_MNUM \n' +
            ',a.PRODUCT_LDATE \n' +
            ',a.PRODUCT_PIC \n' +
            ',a.PRODUCT_DESC \n' +
            ',a.PRODUCT_ORIPRICE \n' +
            ',a.PRODUCT_WDATE\n' +
            ',a.PRODUCT_CATE\n' +
            'FROM Product a\n'+
            'WHERE a.PRODUCT_DELETE = 0)a \n'+
            'limit '+start+', '+end+';'
        , { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            //console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));

}

module.exports = { shoplist };