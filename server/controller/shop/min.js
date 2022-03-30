const { Product } = require('../../models');
const { Sell } = require('../../models');
const db = require('../../models');
const Sequelize = require('Sequelize');

async function min(req, res, next) {

    const cate = req.body.cate;
    console.log("*********************");
    console.log("body 값 확인 ==>",req.body, ",cate value : ", req.body.cate);

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
            ',b.SELL_PRICE \n' +
        'FROM Product a, Sell b\n' +
        'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
        'AND a.PRODUCT_CATE IN ('+
        '' + cate + ')'+ '\n'+
        'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY);', { type: Sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { min };