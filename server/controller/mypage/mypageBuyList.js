const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { Buy } = require('../../models');
const { Sell } = require('../../models');
const { Product } = require('../../models');

async function getBuyCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const wait = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: {[Op.or]:['0', '2']} },
        });

        let progress = await Buy.count({
        where: { BUY_BUYER_KEY: userKey, BUY_STATUS: '3' },
        });
        progress += await Sell.count({
            where: { SELL_BUYER_KEY: userKey, SELL_STATUS: '3' },
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
            BUY_STATUS: getWaitStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        }
    })
    .then((result) => {
        console.log("getWaitBuyListCount has been responsed from db : ",result);
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

async function getWaitBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 
    const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;
    
    await Buy.findAll({
        where:{
            BUY_BUYER_KEY: userKey,
            BUY_STATUS: getWaitStatusCondition(state),
            BUY_SDATE: {[Op.between]: [startDate, endDate]}
        },
        include:{
            model:Product,
            attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_PIC'],
        },
        limit:[start, count],
        order:getSeqOrderCondition(orderColumn, orderDir),
    })
    .then((result) => {
        console.log("getWaitBuyList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

function getSeqOrderCondition(orderColumn, orderDir)
{
    if(orderColumn.length == 0)
        return "";
    else
        return [[orderColumn, orderDir]]
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
    SELECT COUNT(*) FROM (
        SELECT 
            b.BUY_KEY
            ,(Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_STATUS
            ,(Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_RESULT
        FROM Buy b 
        WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
        UNION
        SELECT
            s.SELL_KEY
            ,(Select i.INSPECTION_STATUS from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_STATUS
            ,(Select i.INSPECTION_RESULT from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_RESULT
        FROM Sell s 
        WHERE s.sell_buyer_KEY = ${userKey} AND s.sell_status = 3 AND s.sell_edate BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getProgressFilter(state) } `;
    
    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressBuyListCount has been responsed from db : ",result);
        res.json(result[0]["COUNT(*)"]);;
    })
    .catch((err) => console.log(err))
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
    //const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;

    const query = `
    SELECT * FROM (
        SELECT
        'Buy' as TABLE_NAME
        ,b.BUY_KEY
        ,b.PRODUCT_KEY
        ,b.BUY_SELLER_KEY
        ,b.BUY_PRICE
        ,b.BUY_SDATE
        ,b.BUY_EDATE
        ,b.BUY_STATUS
        ,b.BUY_BUYER_KEY
        ,p.PRODUCT_CATE
        ,p.PRODUCT_BRAND
        ,p.PRODUCT_NAME
        ,p.PRODUCT_PIC
        ,p.PRODUCT_DESC
        ,(Select i.INSPECTION_DATE from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_DATE
        ,(Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_STATUS
        ,(Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_RESULT
    FROM Buy b 
    JOIN Product AS p ON b.PRODUCT_KEY = p.PRODUCT_KEY
    WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
        UNION
        SELECT 
        'Sell' as TABLE_NAME
            ,s.SELL_KEY
            ,s.product_key
            ,s.sell_seller_key
            ,s.sell_price
            ,s.sell_sdate
            ,s.sell_edate
            ,s.sell_status
            ,s.sell_buyer_key
            ,p.PRODUCT_CATE
            ,p.PRODUCT_BRAND
            ,p.PRODUCT_NAME
            ,p.PRODUCT_PIC
            ,p.PRODUCT_DESC
            ,(Select i.INSPECTION_DATE from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_DATE
            ,(Select i.INSPECTION_STATUS from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_STATUS
            ,(Select i.INSPECTION_RESULT from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_RESULT
        FROM Sell s 
        JOIN Product AS p ON s.product_key = p.PRODUCT_KEY
        WHERE s.sell_buyer_key = ${userKey} AND s.sell_status = 3 AND s.sell_edate BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getProgressFilter(state) }
        ${ getProgressOrder(orderDir) }
        LIMIT ${start}, ${count} ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressBuyList has been responsed from db : ", result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function IsReturnEmpty(state)
{
    //slotStates:["전체", "발송대기", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "배송 중", "거래실패"],
    if(state == 0 || state == 1 || state == 5 || state == 6 || state == 7)
        return false;
        
    return true;
}

function getProgressFilter(state)
{
    //slotStates:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
    switch(state){
    //발송요청
        case 1:
            return "WHERE u.INSPECTION_STATUS IS NULL";
        //검수중
        case 5:{
            return "WHERE u.INSPECTION_STATUS = 0";
        }
        //불합격
        case 6:{
            return `WHERE u.INSPECTION_STATUS = 1 AND u.INSPECTION_RESULT = 0`;
        }
        //합격
        case 7:{
            return `WHERE u.INSPECTION_STATUS = 1 AND u.INSPECTION_RESULT = 1`;
        }
        //전체
        default:{
            return "";
        }
    }
}

//*** 여러개의 order by 를 사용할 경우 왼쪽부터 순차적으로 진행되기 때문에 순서를 고려해야 한다.
function getProgressOrder(orderDir)
{
    //orderDir "ASC" : 발송요청 -> 검수중 -> 보류(불합격) -> 합격
    //orderDir "DESC" : 합격 -> 보류(불합격) -> 검수중 -> 발송요청
    if(orderDir == "DESC")
    {
        return `ORDER BY u.INSPECTION_RESULT DESC, u.INSPECTION_STATUS DESC`
    }
    else
    {
        return `ORDER BY u.INSPECTION_STATUS ASC, u.INSPECTION_RESULT ASC`
    }
}

async function getDoneBuyListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const state = req.body.state; 

    const query = `
    SELECT COUNT(*) FROM (
        SELECT 
            b.BUY_KEY
            ,b.BUY_STATUS
        FROM Buy b 
        WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
        UNION
        SELECT
            s.SELL_KEY
            ,s.sell_status
        FROM Sell s 
        WHERE s.SELL_BUYER_KEY = ${userKey} AND s.sell_edate BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getDoneFilter(state) } `;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getDoneBuyListCount has been responsed from db : ",result);
        res.json(result[0]["COUNT(*)"]);
    })
    .catch((err) => console.log(err))
}



async function getDoneBuyList(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const start = req.body.limitStart;
    const count = req.body.limitCount;
    const state = req.body.state; 
    const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;

    const query = `
    SELECT * FROM (
        SELECT 
            'Buy' as TABLE_NAME
            ,b.BUY_KEY
            ,b.PRODUCT_KEY
            ,b.BUY_SELLER_KEY
            ,b.BUY_PRICE
            ,b.BUY_SDATE
            ,b.BUY_EDATE
            ,b.BUY_STATUS
            ,b.BUY_BUYER_KEY
            ,p.PRODUCT_CATE
            ,p.PRODUCT_BRAND
            ,p.PRODUCT_NAME
            ,p.PRODUCT_PIC
            ,p.PRODUCT_DESC
        FROM Buy b 
        JOIN Product AS p ON b.PRODUCT_KEY = p.PRODUCT_KEY
        WHERE b.BUY_BUYER_KEY = ${userKey} AND b.BUY_EDATE BETWEEN '${startDate}' AND '${endDate}'
        UNION
        SELECT
            'Sell' as TABLE_NAME
            ,s.SELL_KEY
            ,s.product_key
            ,s.sell_seller_key
            ,s.sell_price
            ,s.sell_sdate
            ,s.sell_edate
            ,s.sell_status
            ,s.sell_buyer_key
            ,p.PRODUCT_CATE
            ,p.PRODUCT_BRAND
            ,p.PRODUCT_NAME
            ,p.PRODUCT_PIC
            ,p.PRODUCT_DESC
        FROM Sell s 
        JOIN Product AS p ON s.product_key = p.PRODUCT_KEY
        WHERE s.sell_buyer_key = ${userKey} AND s.sell_edate BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getDoneFilter(state) }
        ${ getDoneOrder(orderColumn, orderDir) }
        LIMIT ${start}, ${count} ;`;

        await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getDoneBuyList has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err))
} 

function getDoneFilter(state)
{
    switch(state){
        case 1:{
            return 'WHERE u.BUY_STATUS = 1';
        }
        case 2:{
            return 'WHERE u.BUY_STATUS = 4';
        }
        default:{
            return "WHERE (u.BUY_STATUS = 1 OR u.BUY_STATUS = 4)"
        }
    }
}

function getDoneOrder(orderColumn, orderDir)
{
    if(orderColumn == null || orderColumn.length ==0)
        return "";
    else
    {
        return `ORDER BY u.${orderColumn} ${orderDir}`;
    }
}

async function updateFinalize(req, res) {
    const tableName = req.body.tableName;
    const key = req.body.key;
    const decision = req.body.decision;
    //decision 0:구매확정, 1:구매취소
    let status = 1;
    if(decision != 0)
        status = 4;
 
    if(tableName == 'Buy')
    {
        await Buy.update(
            { BUY_STATUS: status}, 
            { where: { BUY_KEY:key } }
        )
        .then((result) => {
            console.log("updateDeliver has been responsed from db.Buy : ",result);
            res.send(result);
            //jResult = JSON.parse(result);
        })
        .catch((err) => console.log(err))
    }
    else
    {
        await Sell.update(
            { sell_status: status }, 
            { where: { SELL_KEY:key } }
        )
        .then((result) => {
            console.log("updateDeliver has been responsed from db.Sell: ",result);
            res.send(result);
            //jResult = JSON.parse(result);
        })
        .catch((err) => console.log(err))
    }
} 

module.exports = {
    getBuyCounts
    ,getWaitBuyList, getProgressBuyList, getDoneBuyList
    ,getWaitBuyListCount, getProgressBuyListCount, getDoneBuyListCount
    ,updateFinalize
};
