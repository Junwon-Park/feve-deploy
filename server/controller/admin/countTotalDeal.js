const { Sell } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalDeal(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();

    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Sell s \n' +
            'inner join Buy b on s.PRODUCT_KEY=b.PRODUCT_KEY  \n' +
            'where SELL_STATUS ="2" and buy_status ="2" and  \n'+
            'YEAR(SELL_EDATE)="'+thisYear+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalDeal };