const { Buy } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function beforeCountTotalBuy(req, res, next) {
    const date = new Date();
    const thisYear= (date.getFullYear()-1).toString();
    const thisMonth= date.getMonth().toString();
    const thisDate= (date.getDate()-1).toString();
    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Buy b \n' +
            'where DAY(buy_edate)="'+thisDate+'"\n'+
            'and buy_status ="1" or buy_status ="0" or buy_status ="2";'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { beforeCountTotalBuy };