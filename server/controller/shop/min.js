const { Product } = require('../../models');
const { Sell } = require('../../models');
const db = require('../../models');
const sequelize = require('sequelize');

async function min(req, res, next) {
  const cate = req.body.cate;
  const price = req.body.price;

  console.log('*********************');
  console.log(
    'body 값 확인 ==>',
    req.body,
    ',cate value : ',
    req.body.cate,
    ' ,price value : ',
    req.body.price
  );

  if (price === undefined) {
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
          'FROM Product a, Sell b\n' +
          'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
          'AND a.PRODUCT_CATE IN (' +
          '' +
          cate +
          ')' +
          '\n' +
          'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n;',
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(err));
  }

  if (cate === undefined) {
    if (price === 'all') {
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
            'FROM Product a, Sell b\n' +
            'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY);',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          console.log(result);
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
            ',b.SELL_PRICE \n' +
            'FROM Product a, Sell b\n' +
            'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n' +
            'AND b.SELL_PRICE < 100000 ;',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          console.log(result);
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
            'FROM Product a, Sell b\n' +
            'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n' +
            'AND b.SELL_PRICE BETWEEN 100000 AND 300000;',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          console.log(result);
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
            'FROM Product a, Sell b\n' +
            'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n' +
            'AND b.SELL_PRICE BETWEEN 300001 AND 500000;',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          console.log(result);
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
            'FROM Product a, Sell b\n' +
            'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
            'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n' +
            'AND b.SELL_PRICE > 500000;',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
          console.log(result);
          res.json(result);
        })
        .catch((err) => console.log(err));
    }
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
          'FROM Product a, Sell b\n' +
          'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
          'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY);',
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(err));
  }

  // await db.sequelize.query(
  //     'SELECT \n' +
  //         'a.PRODUCT_KEY \n' +
  //         ',a.PRODUCT_BRAND \n' +
  //         ',a.PRODUCT_NAME \n' +
  //         ',a.PRODUCT_MNUM \n' +
  //         ',a.PRODUCT_LDATE \n' +
  //         ',a.PRODUCT_PIC \n' +
  //         ',a.PRODUCT_DESC \n' +
  //         ',a.PRODUCT_ORIPRICE \n' +
  //         ',a.PRODUCT_WDATE\n' +
  //         ',a.PRODUCT_CATE\n' +
  //         ',b.SELL_PRICE \n' +
  //     'FROM Product a, Sell b\n' +
  //     'WHERE b.PRODUCT_KEY = a.PRODUCT_KEY \n' +
  //     'AND a.PRODUCT_CATE IN ('+
  //     '' + cate + ')'+ '\n'+
  //     'AND b.SELL_PRICE = (SELECT MIN(SELL_PRICE) FROM Sell WHERE PRODUCT_KEY = a.PRODUCT_KEY)\n'+
  //     'AND b.SELL_PRICE > '+
  //     '' + price + '' + ';', { type: Sequelize.QueryTypes.SELECT })
  //     .then(result => {
  //         console.log(result);
  //         res.json(result);
  //     })
  //     .catch(err => console.log(err));

  // }
}

module.exports = { min };
