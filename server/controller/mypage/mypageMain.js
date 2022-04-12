const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { User, Buy, Sell } = require('../../models');

async function getSimpleUserInfo(req, res) {
  await User.findOne({
        attributes:['USER_NAME', 'USER_MAIL','USER_KEY', 'USER_ID'],
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

async function removeAccount(req, res) {
    await User.update(
        {
            USER_DELETE: '1',
        }, {
            where:{
                USER_KEY: req.body.USER_KEY,
            }
        }
    )
        .then((result) => {
            console.log("simpleUserInfo has been responsed from db : ",result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}


async function getBuyCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        let total = await Buy.count({
            where: { BUY_BUYER_KEY: userKey },
        });
        total += await Sell.count({
            where: { 
                    SELL_BUYER_KEY: userKey},
            });

        const wait = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: {[Op.or]:['0', '2']} },
        });

        let progress = await Buy.count({
            where: { BUY_BUYER_KEY: userKey, BUY_STATUS: '3' },
        });
        progress += await Sell.count({
            where: { 
                SELL_BUYER_KEY: userKey, SELL_STATUS: '3' },
            });

        let done = await Buy.count({
            where: { 
                BUY_BUYER_KEY: userKey, 
                BUY_STATUS: {[Op.or]:['1', '4']},
            },
        });
        done += await Sell.count({
            where: { 
                SELL_BUYER_KEY: userKey,
                SELL_STATUS: {[Op.or]:['1', '4']},
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
        let total = await Sell.count({
            where: { SELL_SELLER_KEY: userKey },
        });
        total += await Buy.count({
            where: { 
                    BUY_SELLER_KEY: userKey},
            });

        const wait = await Sell.count({
            where: { SELL_SELLER_KEY: userKey, SELL_STATUS: {[Op.or]:['0', '2']} },
        });

        let progress = await Sell.count({
            where: { SELL_SELLER_KEY: userKey, SELL_STATUS: '3' },
        });
        progress += await Buy.count({
            where: { 
                    BUY_SELLER_KEY: userKey, BUY_STATUS: '3' },
            });
        
        //where: { [Op.and]: [ { authorId: 12 }, { status: 'active' } ] }
        let done = await Sell.count({
            where: { 
                SELL_SELLER_KEY: userKey, 
                SELL_STATUS: {[Op.or]:['1', '4']},
            },
        });
        done += await Buy.count({
            where: { 
                BUY_SELLER_KEY: userKey,
                BUY_STATUS: {[Op.or]:['1', '4']},
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
            `SELECT
            f.FAVORITE_KEY
            ,p.PRODUCT_KEY
            ,p.PRODUCT_BRAND
            ,p.PRODUCT_NAME
            ,p.PRODUCT_PIC
            ,(SELECT MIN(s.SELL_PRICE) FROM Sell AS s WHERE p.PRODUCT_KEY = s.PRODUCT_KEY) MIN_PRICE
            FROM Favorite AS f
            JOIN Product AS p ON f.PRODUCT_KEY = p.PRODUCT_KEY
            WHERE USER_KEY = ${userKey}
            limit 0, 6;`
            ,{ type: sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log("favoriteList has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

module.exports = { getSimpleUserInfo, getBuyCounts, getSellCounts, getSimpleFavoriteList, removeAccount };
