const sequelize = require('sequelize');
const db = require('../../models');
const { Favorite } = require('../../models');

async function getFavoriteListCount(req, res) {
  const userKey = req.body.USER_KEY;
  try{
      const total = await Favorite.count({
          where: { USER_KEY: userKey },
      });

      console.log("buyCount has been responsed from db : ", total);
      res.json(total);
  }catch(err){
      console.log(err);
  }
}

async function getFavoriteList(req, res) {
    const userKey = req.body.USER_KEY;
    const limitStart = req.body.LIMIT_START;
    const limitEnd = req.body.LIMIT_END;

    console.log("limitStart: ", limitStart);
    console.log("limitEnd: ", limitEnd);

    await db.sequelize
        .query(
          'SELECT \n'
            + 'f.FAVORITE_KEY \n'
            + ',p.PRODUCT_BRAND \n'
            + ',p.PRODUCT_NAME \n'
            + ',p.PRODUCT_PIC \n'
            + ',(SELECT MIN(s.SELL_PRICE) FROM Sell AS s WHERE p.PRODUCT_KEY = s.PRODUCT_KEY) MIN_PRICE \n'
          + 'FROM Favorite AS f \n'
          + 'JOIN Product AS p ON f.PRODUCT_KEY = p.PRODUCT_KEY \n'
          + 'WHERE USER_KEY =' + userKey + '\n'
          + 'limit ' + limitStart + ', ' + limitEnd + ';'
          ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log("favoriteList has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}


async function deleteFavorite(req, res) {
  const key = req.body.FAVORITE_KEY;

  const row = await Favorite.findOne({
    where: { FAVORITE_KEY: key },
  });

  if (row) {    
    await row.destroy()
    .then((result) => {
      console.log("FAVORITE_KEY: ", key, " has been deleted / result: ", result);
      res.json(result);
    })
    .catch((err) => console.log(err));
  }
}

module.exports = { getFavoriteList, deleteFavorite, getFavoriteListCount };
