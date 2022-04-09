const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { Buy } = require('../../models');
const { Product } = require('../../models');

async function getBuyCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const wait = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: {[Op.or]:['0', '2']} },
        });

        const progress = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: '3' },
        });

        const done = await Buy.count({
            where: { 
                BUY_BUYER_KEY: userKey, 
                BUY_STATUS: {[Op.or]:['1', '4']},
            },
        });

        buyCounts = [wait, progress, done]
        console.log("buyCount has been responsed from db : ", buyCounts);
        res.json(buyCounts);
    }catch(err){
        console.log(err);
    }
}

async function getWaitBuyListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const state = req.body.state; 

    await Buy.count({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: getBuyStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        }
    })
    .then((result) => {
        console.log("getWaitBuyListCount has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getBuyStatusCondition(state)
{
    let condition;
    switch(state){
        case 1:{
            condition = '0';
            break;
        }
        case 2:{
            condition = '2';
            break;
        }
        default:{
            condition = {[Op.or]:['0', '2']};
            break;
        }
    }
    return condition;
}

async function getWaitBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 

    await Buy.findAll({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: getBuyStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count]
    })
    .then((result) => {
        console.log("getWaitBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}


async function getProgressBuyListCount(req, res) {
    
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
    FROM Buy AS b
    JOIN Product AS p ON b.PRODUCT_KEY = p.PRODUCT_KEY
    WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
    ${ getProgressStatusCondition(state) } ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressBuyListCount has been responsed from db : ",result);
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
            return "AND (Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) IS NULL";
        //검수중
        case 5:{
            return "AND (Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) = 0";
        }
        //불합격
        case 6:{
            return `AND (Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) = 1
                    AND (Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) = 0`;
        }
        //합격
        case 7:{
            return `AND (Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) = 1
                    AND (Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) = 1`;
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

async function getProgressBuyList(req, res) {
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
        b.BUY_KEY	
        ,b.PRODUCT_KEY	
        ,b.BUY_BUYER_KEY	
        ,b.BUY_PRICE	
        ,b.BUY_SDATE	
        ,b.BUY_EDATE	
        ,b.BUY_STATUS	
        ,b.BUY_SELLER_KEY
        ,p.PRODUCT_KEY
        ,p.PRODUCT_CATE
        ,p.PRODUCT_BRAND
        ,p.PRODUCT_NAME
        ,p.PRODUCT_PIC
        ,p.PRODUCT_DESC
        ,(Select i.INSPECTION_DATE from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_DATE
        ,(Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_STATUS
        ,(Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_RESULT
    FROM Buy AS b
    JOIN Product AS p ON b.PRODUCT_KEY = p.PRODUCT_KEY
    WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
    ${ getProgressStatusCondition(state) }
    LIMIT ${start}, ${count} ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        //console.log("getProgressBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

async function getDoneBuyListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const state = req.body.state; 

    await Buy.count({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: getDoneStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        }
    })
    .then((result) => {
        console.log("getDoneBuyListCount has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getDoneStatusCondition(state)
{
    let condition;
    switch(state){
        case 1:{
            condition = '1';
            break;
        }
        case 2:{
            condition = '4';
            break;
        }
        default:{
            condition = {[Op.or]:['1', '4']};
            break;
        }
    }
    return condition;
}

async function getDoneBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 

    await Buy.findAll({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: getDoneStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count]
    })
    .then((result) => {
        console.log("getDoneBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
} 

module.exports = {getBuyCounts, getWaitBuyList, getProgressBuyList, getDoneBuyList, getWaitBuyListCount, getProgressBuyListCount, getDoneBuyListCount};
