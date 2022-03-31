const sequelize = require('sequelize');
const Op = sequelize.Op;
const { User } = require('../../models');
const { Buy } = require('../../models');
const { Sell } = require('../../models');

async function getSimpleUserInfo(req, res) {
    console.log("requested getSimpleUserInfo");
  await User.findOne({
        attributes:['USER_NAME', 'USER_MAIL'],
        where:{
            USER_KEY: req.body.USER_KEY,
        }
    })
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

async function getBuyCounts(req, res) {
    console.log("requested getBuyCount");
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
        console.log("buyCount has been responsed from db : " + buyCounts);
        res.json(buyCounts);
    }catch(err){
        console.log(err);
    }
}

async function getSellCounts(req, res) {
    console.log("requested getSellCount");
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
        console.log("sellCount has been responsed from db : " + sellCounts);
        res.json(sellCounts);
    }catch(err){
        console.log(err);
    }
}

module.exports = { getSimpleUserInfo, getBuyCounts, getSellCounts };
