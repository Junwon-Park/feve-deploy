const { Product } = require('../../models');
const { Sell } = require('../../models');
const db = require('../../models');
const Sequelize = require('Sequelize');

async function min(req, res, next) {

    const cate = req.body.cate;
    const price = req.body.price;
    const start = price.substring(0,1);
    const end = price.substring(1,1);
    console.log(start);
    console.log(end);
    console.log("*********************");
    console.log("body 값 확인 ==>",req.body, ",cate value : ", req.body.cate, " ,price value : ", req.body.price);

    if(price === undefined)
    {
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
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n;', { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => console.log(err));
    }

    if(cate === undefined)
    {
       
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
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n'+
            'AND b.SELL_PRICE BETWEEN '+
            '' + price + '' + ';', { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => console.log(err));
    }
    else{
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
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n'+
            'AND b.SELL_PRICE > '+
            '' + price + '' + ';', { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => console.log(err));
    
        }
}

module.exports = { min };