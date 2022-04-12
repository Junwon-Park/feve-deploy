const { Buy } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const date = new Date();
const thisYear= date.getFullYear().toString();
const thisMonth= (date.getMonth()+1).toString();
const thisDate= date.getDate().toString();

console.log("일", thisDate, "월", thisMonth, "연도", thisYear)

async function countTotalBuy(req, res, next) {
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Buy b \n' +
            'where DAY(buy_edate)="'+thisDate+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("countTotalBuy",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function countTotalDeal(req, res, next) {
    await db.sequelize
        .query(
            ' select\n' +
            '(select count(*) from sell where sell_status=\'1\' and month(sell_edate)='+thisMonth+') as sell_count\n' +
            ',(select count(*) from buy where buy_status=\'1\' and month(buy_edate)='+thisMonth+') as buy_count\n' +
            ',(select (sell_count + buy_count) from dual) as cnt\n' +
            'from dual;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("countTotalDeal", result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function countTotalSell(req, res, next) {
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Sell  \n' +
            'where DAY(SELL_EDATE)="'+thisDate+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("countTotalSell",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function countTotalUser(req, res, next) {
    await db.sequelize
        .query(
            ' SELECT COUNT(*) as cnt \n' +
            ' FROM User \n' +
            'where MONTH(createdAt)="'+thisMonth+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("countTotalUser",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalBuy, countTotalDeal, countTotalSell, countTotalUser };