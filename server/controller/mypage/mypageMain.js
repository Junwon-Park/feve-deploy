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
        const totalQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_buyer_key = ${userKey}
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_BUYER_KEY = ${userKey}
            ) u;`;

        let total=0;
        await db.sequelize.query(totalQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getBuyCounts.total : ", result);
            total = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const waitQuery = `
        SELECT COUNT(*) FROM Buy
        WHERE BUY_BUYER_KEY = ${userKey} AND (BUY_STATUS = 0 OR BUY_STATUS = 2)`;

        let wait=0;
        await db.sequelize.query(waitQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getBuyCounts.wait : ", result);
            wait = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const progressQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_buyer_key = ${userKey} AND s.sell_status = 3 
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_STATUS = 3
            ) u;`;

        let progress=0;
        await db.sequelize.query(progressQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getBuyCounts.progress : ", result);
            progress = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const doneQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_buyer_key = ${userKey} AND (s.sell_status = 1 OR s.sell_status = 4)
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_BUYER_KEY = ${userKey} AND (b.BUY_STATUS = 1 OR b.BUY_STATUS = 4) 
            ) u;`;

        let done=0;
        await db.sequelize.query(doneQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getBuyCounts.done : ", result);
            done = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

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
        const totalQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_seller_key = ${userKey}
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_SELLER_KEY = ${userKey}
            ) u;`;

        let sellTotal=0;
        await db.sequelize.query(totalQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.total : ", result);
            sellTotal = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const waitQuery = `
        SELECT COUNT(*) FROM Sell
        WHERE sell_seller_key = ${userKey} AND (sell_status = 0 OR sell_status = 2)`;

        let sellWait=0;
        await db.sequelize.query(waitQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.wait : ", result);
            sellWait = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const progressQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_seller_key = ${userKey} AND s.sell_status = 3 
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_SELLER_KEY = ${userKey} AND b.BUY_STATUS = 3
            ) u;`;

        let sellProgress=0;
        await db.sequelize.query(progressQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.progress : ", result);
            sellProgress = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        const doneQuery = `
        SELECT COUNT(*) FROM(
            SELECT
                s.SELL_KEY
            FROM Sell s 
            WHERE s.sell_seller_key = ${userKey} AND (s.sell_status = 1 OR s.sell_status = 4)
            UNION ALL
            SELECT 
                b.BUY_KEY
            FROM Buy b 
            WHERE b.BUY_SELLER_KEY = ${userKey} AND (b.BUY_STATUS = 1 OR b.BUY_STATUS = 4) 
            ) u;`;

        let sellDone=0;
        await db.sequelize.query(doneQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.done : ", result);
            sellDone = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

        sellCounts = [sellTotal, sellWait, sellProgress, sellDone]
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
