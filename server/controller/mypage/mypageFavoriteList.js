const sequelize = require('sequelize');
const db = require('../../models');

async function getFavoriteList(req, res) {
    const userKey = req.body.USER_KEY;

    await db.sequelize
        .query(
          'SELECT \n' +
              'p.PRODUCT_BRAND \n' +
              ',p.PRODUCT_NAME \n' +
              ',p.PRODUCT_PIC \n' +
              ',(SELECT MIN(s.SELL_PRICE) FROM Sell AS s WHERE p.PRODUCT_KEY = s.PRODUCT_KEY) MIN_PRICE\n' +
        'FROM Favorite AS f\n' +
        'JOIN Product AS p ON f.PRODUCT_KEY = p.PRODUCT_KEY\n'+
        'WHERE USER_KEY =' + userKey + ';',
          { type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log("simpleFavorites has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

module.exports = { getFavoriteList };
