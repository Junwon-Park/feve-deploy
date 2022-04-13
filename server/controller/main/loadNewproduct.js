const { Product } = require('../../models');
const { Category } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadNewproduct(req, res, next) {
  await db.sequelize
    .query(
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
        'FROM Product a\n' +
        'LEFT OUTER JOIN Sell b\n'+
        'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
        'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0)\n' +
        'where PRODUCT_DELETE = "0" order by PRODUCT_WDATE DESC  limit 0, 8;',
      { type: Sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadNewproduct };
