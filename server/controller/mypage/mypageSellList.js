const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../../models');
const { Sell } = require('../../models');
const { Buy } = require('../../models');
const { Product } = require('../../models');
const { Inspection } = require('../../models');

async function getSellCounts(req, res) {
    const userKey = req.body.USER_KEY;
    try{
        const waitQuery = `
        SELECT COUNT(*) FROM Sell
        WHERE sell_seller_key = ${userKey} AND (sell_status = 0 OR sell_status = 2)`;

        let wait=0;
        await db.sequelize.query(waitQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.wait : ", result);
            wait = result[0]["COUNT(*)"];
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

        let progress=0;
        await db.sequelize.query(progressQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.progress : ", result);
            progress = result[0]["COUNT(*)"];
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

        let done=0;
        await db.sequelize.query(doneQuery , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getSellCounts.done : ", result);
            done = result[0]["COUNT(*)"];
        })
        .catch((err) => console.log(err))

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
    
    const query = `
        SELECT COUNT(*) FROM Sell s
        WHERE s.sell_seller_key = ${userKey} AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
        ${ getWaitFilter(state) };`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getWaitSellListCount has been responsed from db.Sell : ",result);
        res.json(result[0]["COUNT(*)"]);
    })
    .catch((err) => console.log(err))
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

    const query = `
    SELECT 
        s.SELL_KEY
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
    WHERE s.sell_seller_key = ${userKey} AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
    ${ getWaitFilter(state) }
    ${ getWaitOrder(orderColumn, orderDir) }
    LIMIT ${start}, ${count} ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getWaitSellList has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function getWaitFilter(state)
{
    switch(state){
        case 1:{
            return 'AND sell_status = 0';
        }
        case 2:{
            return 'AND sell_status = 2';
        }
        default:{
            return "AND (sell_status = 0 OR sell_status = 2)"
        }
    }
}

function getWaitOrder(orderColumn, orderDir)
{
    if(orderColumn == null || orderColumn.length ==0)
        return "";
    else
    {
        return `ORDER BY ${orderColumn} ${orderDir}`;
    }
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
    SELECT COUNT(*) FROM (
        SELECT
            s.SELL_KEY
            ,(Select i.INSPECTION_STATUS from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_STATUS
            ,(Select i.INSPECTION_RESULT from Inspection AS i where s.sell_seller_key = i.USER_KEY AND s.product_key = i.PRODUCT_KEY) AS INSPECTION_RESULT
        FROM Sell s 
        WHERE s.sell_seller_key = ${userKey} AND s.sell_status = 3 AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
        UNION ALL
        SELECT 
            b.BUY_KEY
            ,(Select i.INSPECTION_STATUS from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_STATUS
            ,(Select i.INSPECTION_RESULT from Inspection AS i where b.BUY_SELLER_KEY = i.USER_KEY AND b.PRODUCT_KEY = i.PRODUCT_KEY) AS INSPECTION_RESULT
        FROM Buy b 
        WHERE b.BUY_SELLER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND DATE(b.BUY_SDATE) BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getProgressFilter(state) } `;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressSellListCount has been responsed from db.Sell : ",result);
        res.json(result[0]["COUNT(*)"]);
    })
    .catch((err) => console.log(err))
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
    //const orderColumn = req.body.orderColumn;
    const orderDir = req.body.orderDir;

    const query = `
    SELECT * FROM (
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
        WHERE s.sell_seller_key = ${userKey} AND s.sell_status = 3 AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
        UNION ALL
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
        WHERE b.BUY_SELLER_KEY = ${userKey} AND b.BUY_STATUS = 3 AND DATE(b.BUY_SDATE) BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getProgressFilter(state) }
        ${ getProgressOrder(orderDir) }
        LIMIT ${start}, ${count} ;`;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getProgressSellList has been responsed from db : ", result);
        res.json(result);
    })
    .catch((err) => console.log(err))
}

function IsReturnEmpty(state)
{
    //slotStates:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
    //관리 대상이 아닌 것들은 빈 배열을 리턴값으로 보내준다 (클라에서 필터링할때 슬롯이 안나오게 하기 위해.)
    //구매테이블에 판매할때 예시
    //판매자 나타남 sell_status -> 3 (진행중)
    //sell_status가 3으로 진행중이지만 inspection에는 아직 데이터 없음 -> 진행중 탭에서 발송요청 버튼 보여주기
    //발송요청 버튼 누르면 -> inspection에 데이터 넣어주면서 검수중으로 상태변경 (inspection_status -> 0)
    //admin페이지에서 검수완료하면  -> inspection_status = 1, inspection_result = 0 or 1 (0:불합격, 1:합격)
    //sell_status = 3 && inspection_status = 1 && inspection_result=1 이면 구매자에게 물건이 도착했다고 가정 구매내역 페이지에서 구매확정 버튼 보여줌.
    //구매확정 누르면 sell_status -> 1, 구매취소 누르면 sell_status -> 4, 로 바꾸면서 종료탭으로 넘어감.
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

async function getDoneSellListCount(req, res) {
    const userKey = req.body.USER_KEY;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const state = req.body.state; 

    const query = `
    SELECT COUNT(*) FROM (
        SELECT
            s.SELL_KEY
            ,s.sell_status
        FROM Sell s 
        WHERE s.SELL_SELLER_KEY = ${userKey} AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
        UNION ALL
        SELECT 
            b.BUY_KEY
            ,b.BUY_STATUS
        FROM Buy b 
        WHERE b.BUY_SELLER_KEY = ${userKey} AND DATE(b.BUY_SDATE) BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getDoneFilter(state) } `;

    await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
    .then((result) => {
        console.log("getDoneSellListCount has been responsed from db : ",result);
        res.json(result[0]["COUNT(*)"]);
    })
    .catch((err) => console.log(err))
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

    const query = `
    SELECT * FROM (
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
        WHERE s.sell_seller_key = ${userKey} AND DATE(s.sell_sdate) BETWEEN '${startDate}' AND '${endDate}'
        UNION ALL
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
        WHERE b.BUY_SELLER_KEY = ${userKey} AND DATE(b.BUY_SDATE) BETWEEN '${startDate}' AND '${endDate}'
        ) AS u
        ${ getDoneFilter(state) }
        ${ getDoneOrder(orderColumn, orderDir) }
        LIMIT ${start}, ${count} ;`;

        await db.sequelize.query(query , { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("getDoneSellList has been responsed from db : ", result);
            res.json(result);
        })
        .catch((err) => console.log(err))
}

function getDoneFilter(state)
{
    switch(state){
        case 1:{
            return 'WHERE u.sell_status = 1';
        }
        case 2:{
            return 'WHERE u.sell_status = 4';
        }
        default:{
            return "WHERE (u.sell_status = 1 OR u.sell_status = 4)"
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

async function updateDeliver(req, res) {
    const userKey = req.body.userKey;
    const productKey = req.body.productKey;
    const tableName = req.body.tableName;
    const key = req.body.key;
    const decision = req.body.decision;
    const aDate = req.body.aDate;
    console.log("!!!!!updateDeliver: ", userKey, productKey, tableName, key, decision);
    //decision 0:발송완료-> Inspection에 추가
    //decision 1:판매취소-> Buy/Sell 테이블에 STATUS = 4로 변경.
    if(decision == 0)
    {
        await Inspection.create({
            USER_KEY: userKey,
            PRODUCT_KEY: productKey,
            INSPECTION_STATUS: '0',
            INSPECTION_ADATE:aDate,
            })
            .then(result => {
                console.log(result);
                res.send(result);
            })
            .catch(err => console.log(err));
    }
    else
    {
        if(tableName == 'Buy')
        {
            await Buy.update(
                { BUY_STATUS: '4' }, 
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
                { sell_status: '4' }, 
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
} 

module.exports = {
    getSellCounts
    , getWaitSellList, getProgressSellList, getDoneSellList
    , getWaitSellListCount, getProgressSellListCount, getDoneSellListCount
    , updateDeliver 
};
