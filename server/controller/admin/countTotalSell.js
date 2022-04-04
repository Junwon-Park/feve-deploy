const { Sell } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalSell(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();

    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Sell  \n' +
            'where SELL_STATUS ="1" or SELL_STATUS ="0" or  SELL_STATUS ="2" and  \n'+
            'YEAR(SELL_EDATE)="'+thisYear+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalSell };