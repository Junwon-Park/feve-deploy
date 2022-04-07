const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { User, Buy, Sell } = require('../../models');

async function getSimpleUserInfo(req, res) {
  await User.findOne({
        attributes:['USER_NAME', 'USER_MAIL','USER_KEY'],
        where:{
            USER_KEY: req.body.USER_KEY,
        }
    })
    .then((result) => {
        console.log("simpleUserInfo has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

async function getBuyCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const total = await Buy.count({
            where: { BUY_BUYER_KEY: userKey },
        });

        const wait = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: '0' },
        });

        const progress = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: '1' },
        });

        const done = await Buy.count({
            where: { 
                BUY_BUYER_KEY: userKey, 
                BUY_STATUS: {[Op.or]:['1', '2']}
            },
        });

        buyCounts = [total, wait, progress, done]
        console.log("buyCount has been responsed from db : ", buyCounts);
        res.json(buyCounts);
    }catch(err){
        console.log(err);
    }
}

async function getSellCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const total = await Sell.count({
            where: { SELL_SELLER_KEY: userKey },
        });

        const wait = await Sell.count({
        where: { SELL_SELLER_KEY: userKey, SELL_STATUS: '0' },
        });

        const progress = await Sell.count({
            where: { SELL_SELLER_KEY: userKey, SELL_STATUS: '1' },
        });
        
        //where: { [Op.and]: [ { authorId: 12 }, { status: 'active' } ] }
        const done = await Sell.count({
            where: { 
                SELL_SELLER_KEY: userKey, 
                SELL_STATUS: {[Op.or]:['1', '2']}
            },
        });

        sellCounts = [total, wait, progress, done]
        console.log("sellCount has been responsed from db : ", sellCounts);
        res.json(sellCounts);
    }catch(err){
        console.log(err);
    }
}

async function getSimpleFavoriteList(req, res) {
    const userKey = req.body.USER_KEY;
    
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
            + 'limit 0, 6;'
            ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log("favoriteList has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

module.exports = { getSimpleUserInfo, getBuyCounts, getSellCounts, getSimpleFavoriteList };
