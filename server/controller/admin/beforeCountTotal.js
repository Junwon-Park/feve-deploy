const { Buy } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const date = new Date();
const thisYear= (date.getFullYear()-1).toString();
const thisMonth= date.getMonth().toString();
const thisDate= (date.getDate()-1).toString();

async function beforeCountTotalBuy(req, res, next) {
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Buy b \n' +
            'where DAY(buy_edate)='+thisDate+' and \n'+
            ' (buy_status ="1" or buy_status ="0" or buy_status ="2");'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("before:::::::::::::",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function beforeCountTotalDeal(req, res, next) {
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
            console.log("before:::::::::::::",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function beforeCountTotalSell(req, res, next) {
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Sell  \n' +
            'where DAY(SELL_EDATE)='+thisDate+' and  \n' +
            '(SELL_STATUS ="1" or SELL_STATUS ="0" or  SELL_STATUS ="2");'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("before:::::::::::::",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function beforeCountTotalUser(req, res, next) {
    await db.sequelize
        .query(
            ' SELECT COUNT(*) as cnt \n' +
            ' FROM User \n' +
            'where MONTH(createdAt)="'+thisMonth+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log("beforeuser:::::::::::::",result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { beforeCountTotalBuy, beforeCountTotalSell, beforeCountTotalDeal ,beforeCountTotalUser };