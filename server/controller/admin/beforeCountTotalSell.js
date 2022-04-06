const { Sell } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function beforeCountTotalSell(req, res, next) {
    const date = new Date();
    const thisYear= (date.getFullYear()-1).toString();
    const thisMonth= date.getMonth().toString();
    const thisDate= (date.getDate()-1).toString();
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Sell  \n' +
            'where DAY(SELL_EDATE)="'+thisDate+'" \n' +
            'and SELL_STATUS ="1" or SELL_STATUS ="0" or  SELL_STATUS ="2";'
           ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { beforeCountTotalSell };