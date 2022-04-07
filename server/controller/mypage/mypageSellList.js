const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Sell } = require('../../models');
const { Product } = require('../../models');

async function getSellCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const wait = await Sell.count({
        where: { sell_seller_key: userKey, sell_status: '0' },
        });

        const progress = await Sell.count({
        where: { sell_seller_key: userKey, sell_status: '3' },
        });

        const done = await Sell.count({
            where: { 
                sell_seller_key: userKey, 
                sell_status: {[Op.or]:['1', '2']}
            },
        });

        sellCounts = [wait, progress, done]
        console.log("buyCount has been responsed from db : ", sellCounts);
        res.json(sellCounts);
    }catch(err){
        console.log(err);
    }
}

async function getWaitSellListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    
    await Sell.count({
        where:{
            sell_seller_key: userKey,
            sell_status: '0',
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
    })
    .then((result) => {
        console.log("getWaitSellListCount has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

// [Op.gte]: 6,               // >= 6
// [Op.lte]: 10,              // <= 10
async function getWaitSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limtStart;
    const count = req.body.limtCount;

    await Sell.findAll({
        where:{
            sell_seller_key: userKey,
            sell_status: '0',
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count]
    })
    .then((result) => {
        console.log("getWaitSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getProgressSellListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    
    await Sell.count({
        where:{
            sell_seller_key: userKey,
            sell_status: '3',
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
    })
    .then((result) => {
        console.log("getProgressSellListCount has been responsed from db : ",result);
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
            sell_seller_key: userKey,
            sell_status: '3',
            sell_sdate: {[Op.between]: [startDate, endDate]}
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

async function getDoneSellListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    
    await Sell.count({
        where:{
            sell_seller_key: userKey,
            sell_status: {[Op.or]:['1', '2']},
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
    })
    .then((result) => {
        console.log("getDoneSellListCount has been responsed from db : ",result);
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
            sell_seller_key: userKey,
            sell_status: {[Op.or]:['1', '2']},
            sell_sdate: {[Op.between]: [startDate, endDate]}
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

module.exports = {getSellCounts, getWaitSellList, getProgressSellList, getDoneSellList, getWaitSellListCount, getProgressSellListCount, getDoneSellListCount};
