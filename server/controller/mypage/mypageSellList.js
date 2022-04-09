const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { Sell } = require('../../models');
const { Product } = require('../../models');

async function getSellCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const wait = await Sell.count({
        where: { sell_seller_key: userKey, sell_status: {[Op.or]:['0', '2']} },
        });

        const progress = await Sell.count({
        where: { sell_seller_key: userKey, sell_status: '3' },
        });

        const done = await Sell.count({
            where: { 
                sell_seller_key: userKey, 
                sell_status: {[Op.or]:['1', '4']},
            },
        });

        sellCounts = [wait, progress, done]
        console.log("sellCount has been responsed from db : ", sellCounts);
        res.json(sellCounts);
    }catch(err){
        console.log(err);
    }
}

async function getWaitSellListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const state = req.body.state; 
    
    await Sell.count({
        where:{
            sell_seller_key: userKey,
            sell_status: getWaitStatusCondition(state),
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
    })
    .then((result) => {
        console.log("getWaitSellListCount has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getWaitStatusCondition(state)
{
    switch(state){
        case 1:{
            return '0';
        }
        case 2:{
            return '2';
        }
        default:{
            return {[Op.or]:['0', '2']};
        }
    }
}

async function getWaitSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 
    const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;

    await Sell.findAll({
        where:{
            sell_seller_key: userKey,
            sell_status: getWaitStatusCondition(state),
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count],
        order:getSeqOrderCondition(orderColumn, orderDir),
    })
    .then((result) => {
        console.log("getWaitSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getSeqOrderCondition(orderColumn, orderDir)
{
    if(orderColumn.length == 0)
        return "";
    else
        return [[orderColumn, orderDir]]
}

async function getProgressSellListCount(req, res) {
    
    const state = req.body.state;
    if(IsReturnEmpty(state))
    {
        res.json(0);
        return;
    }

    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    
    const query = `
    SELECT COUNT(*)
    FROM Sell AS b
    JOIN Product AS p ON b.product_key = p.PRODUCT_KEY
    WHERE b.sell_seller_KEY = ${userKey} AND b.sell_status = 3 AND b.sell_edate BETWEEN '${startDate}' AND '${endDate}'
    ${ getProgressStatusCondition(state) } ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressSellListCount has been responsed from db : ",result);
        res.json(result[0]["COUNT(*)"]);;
    })
    .catch((err) => console.log(err))
}

function getProgressStatusCondition(state)
{
    //slotStates:["전체", "대기 중", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "배송 중", "거래실패"],
    switch(state){
        //입고완료
        case 4:
            return "AND (Select i.INSPECTION_STATUS from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) IS NULL";
        //검수중
        case 5:{
            return "AND (Select i.INSPECTION_STATUS from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) = 0";
        }
        //불합격
        case 6:{
            return `AND (Select i.INSPECTION_STATUS from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) = 1
                    AND (Select i.INSPECTION_RESULT from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) = 0`;
        }
        //합격
        case 7:{
            return `AND (Select i.INSPECTION_STATUS from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) = 1
                    AND (Select i.INSPECTION_RESULT from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) = 1`;
        }
        //전체
        default:{
            return "";
        }
    }
}

function IsReturnEmpty(state)
{
    if(state == 0 || state == 4 || state == 5 || state == 6 || state == 7)
        return false;
        
    return true;
}

async function getProgressSellList(req, res) {
    const state = req.body.state;
    if(IsReturnEmpty(state))
    {
        res.json([]);
        return;
    }

    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;

    const query = `
    SELECT
        b.SELL_KEY	
        ,b.product_key
        ,b.sell_seller_key	
        ,b.sell_price	
        ,b.sell_sdate	
        ,b.sell_edate	
        ,b.sell_status	
        ,b.sell_buyer_key
        ,p.PRODUCT_CATE
        ,p.PRODUCT_BRAND
        ,p.PRODUCT_NAME
        ,p.PRODUCT_PIC
        ,p.PRODUCT_DESC
        ,(Select i.INSPECTION_DATE from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) AS INSPECTION_DATE
        ,(Select i.INSPECTION_STATUS from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) AS INSPECTION_STATUS
        ,(Select i.INSPECTION_RESULT from Inspection AS i where b.sell_seller_key = i.USER_KEY AND b.product_key = i.PRODUCT_KEY) AS INSPECTION_RESULT
    FROM Sell AS b
    JOIN Product AS p ON b.product_key = p.PRODUCT_KEY
    WHERE b.sell_seller_key = ${userKey} AND b.sell_status = 3 AND b.sell_edate BETWEEN '${startDate}' AND '${endDate}'
    ${ getProgressStatusCondition(state) }
    LIMIT ${start}, ${count} ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
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
    const state = req.body.state; 

    await Sell.count({
        where:{
            sell_seller_key: userKey,
            sell_status: getDoneStatusCondition(state),
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
    })
    .then((result) => {
        console.log("getDoneSellListCount has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getDoneStatusCondition(state)
{
    switch(state){
        case 1:{
            return '1';
        }
        case 2:{
            return '4';
        }
        default:{
            return {[Op.or]:['1', '4']};
        }
    }
}

async function getDoneSellList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 
    const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;

    await Sell.findAll({
        where:{
            sell_seller_key: userKey,
            sell_status: getDoneStatusCondition(state),
            sell_sdate: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count],
        order:getSeqOrderCondition(orderColumn, orderDir),
    })
    .then((result) => {
        console.log("getDoneSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

module.exports = {getSellCounts, getWaitSellList, getProgressSellList, getDoneSellList, getWaitSellListCount, getProgressSellListCount, getDoneSellListCount};
