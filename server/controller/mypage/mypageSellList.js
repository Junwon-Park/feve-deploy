const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Sell } = require('../../models');
const { Product } = require('../../models');

async function getSellCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const wait = await Sell.count({
        where: { SELL_SELLER_KEY: userKey, SELL_STATUS: '0' },
        });

        const progress = await Sell.count({
        where: { SELL_SELLER_KEY: userKey, SELL_STATUS: '1' },
        });

        const done = await Sell.count({
            where: { 
                SELL_SELLER_KEY: userKey, 
                SELL_STATUS: {[Op.or]:['1', '2']}
            },
        });

        sellCounts = [wait, progress, done]
        console.log("buyCount has been responsed from db : ", sellCounts);
        res.json(sellCounts);
    }catch(err){
        console.log(err);
    }
}

// [Op.gte]: 6,               // >= 6
// [Op.lte]: 10,              // <= 10
async function getWaitSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Sell.findAll({
        where:{
            SELL_SELLER_KEY: userKey,
            SELL_STATUS: '0',
            [Op.and]:{
                SELL_SDATE:{[Op.lte]: endDate },
                SELL_EDATE:{[Op.gte]: startDate },
            }
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
    })
    .then((result) => {
        console.log("getWaitSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getProgressSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Sell.findAll({
        where:{
            SELL_SELLER_KEY: userKey,
            SELL_STATUS: '3',
            [Op.and]:{
                SELL_SDATE:{[Op.lte]: endDate },
                SELL_EDATE:{[Op.gte]: startDate },
            }
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
    })
    .then((result) => {
        console.log("getProgressSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getDoneSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Sell.findAll({
        where:{
            SELL_SELLER_KEY: userKey,
            SELL_STATUS: {[Op.or]:['1', '2']},
            [Op.and]:{
                SELL_SDATE:{[Op.lte]: endDate },
                SELL_EDATE:{[Op.gte]: startDate },
            }
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
    })
    .then((result) => {
        console.log("getDoneSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

module.exports = {getSellCounts, getWaitSellList, getProgressSellList, getDoneSellList};
