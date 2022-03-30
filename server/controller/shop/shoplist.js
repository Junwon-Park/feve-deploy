const { Product } = require("../../models");
const { Sell } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");


async function shoplist(req, res, next) {

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
        'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY);', { type: sequelize.QueryTypes.SELECT })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));

    // await Product.findAll({

    //     group: "PRODUCT_KEY",
    //     include:[
    //         {
    //             model: Sell,
    //             //attributes:['PRODUCT_KEY',[sequelize.fn('min', sequelize.col('SELL_PRICE')),'SELL_PRICE']]
    //             attributes:[[sequelize.fn('min', sequelize.col('SELL_PRICE')),'SELL_PRICE']]
                
                
    //         }
    //     ]
    // })
    //     .then(result => {
    //         console.log(result);
    //         res.json(result);
    //     })
    //     .catch(err => console.log(err));
}

module.exports = { shoplist };