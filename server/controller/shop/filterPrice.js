const { Product } = require('../../models');
const { Sell } = require('../../models');
const db = require('../../models');
const sequelize = require('sequelize');

async function filterPrice(req, res, next) {
  const price = req.body.price;
  // const start = req.body.limitStart;
  // const end = req.body.limitEnd;

    if (price === 'all') {
      await db.sequelize
        .query(
          'SELECT DISTINCT\n' +
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
        'INNER JOIN Sell b\n'+
        'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
        'AND a.PRODUCT_DELETE = 0\n'+
        'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0);'
        ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          //console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    } else if (price === '10') {
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
            ',(SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0) AS SELL_PRICE \n' +
      'FROM Product a\n' +
      'INNER JOIN Sell b\n'+
      'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
      'AND a.PRODUCT_DELETE = 0\n'+
      'AND b.SELL_PRICE < 100000;'
      ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          //console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    } else if (price === '30') {
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
      'INNER JOIN Sell b\n'+
      'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
      'AND a.PRODUCT_DELETE = 0\n'+
      'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0)\n'+
      'AND b.SELL_PRICE BETWEEN 100000 AND 300000;'
      ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          //console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    } else if (price === '50') {
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
      'INNER JOIN Sell b\n'+
      'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
      'AND a.PRODUCT_DELETE = 0\n'+
      'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0)\n'+
      'AND b.SELL_PRICE BETWEEN 300001 AND 500000;'
      ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          //console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    } else {
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
      'INNER JOIN Sell b\n'+
      'ON b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
      'AND a.PRODUCT_DELETE = 0\n'+
      'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY AND SELL_STATUS=0)\n'+
      'AND b.SELL_PRICE > 500001;'
      ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          //console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    }
}

module.exports = { filterPrice };
