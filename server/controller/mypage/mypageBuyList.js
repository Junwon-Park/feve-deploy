const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Buy } = require('../../models');
const { Product } = require('../../models');

async function getBuyCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
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

        buyCounts = [wait, progress, done]
        console.log("buyCount has been responsed from db : ", buyCounts);
        res.json(buyCounts);
    }catch(err){
        console.log(err);
    }
}

// [Op.gte]: 6,               // >= 6
// [Op.lte]: 10,              // <= 10
async function getWaitBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Buy.findAll({
        // attributes:
        //     [ 
        //         [sequelize.col(product.PRODUCT_NAME), 'PRODUCT_NAME'],
        //         [sequelize.col(product.PRODUCT_BRAND), 'PRODUCT_BRAND'],
        //         [sequelize.col(product.PRODUCT_PIC), 'PRODUCT_PIC'],
        //     ],            
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: '0',
            [Op.and]:{
                BUY_SDATE:{[Op.lte]: endDate },
                BUY_EDATE:{[Op.gte]: startDate },
            }
        },
        include:{
            model:Product,
            //as: 'product',
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        
    })
    .then((result) => {
        console.log("getWaitBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getProgressBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Buy.findAll({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: '3',
            [Op.and]:{
                BUY_SDATE:{[Op.lte]: endDate },
                BUY_EDATE:{[Op.gte]: startDate },
            }
        }
    })
    .then((result) => {
        console.log("getProgressBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getDoneBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    await Buy.findAll({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: {[Op.or]:['1', '2']},
            [Op.and]:{
                BUY_SDATE:{[Op.lte]: endDate },
                BUY_EDATE:{[Op.gte]: startDate },
            }
        }
    })
    .then((result) => {
        console.log("getDoneBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

module.exports = {getBuyCounts, getWaitBuyList, getProgressBuyList, getDoneBuyList};
