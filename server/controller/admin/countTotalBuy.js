const { Buy } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalBuy(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();

    await db.sequelize
        .query(
            'select count(*) as cnt \n' +
            'from Buy b \n' +
            'where buy_status ="1" or buy_status ="0" or buy_status ="2" and \n'+
            'YEAR(buy_edate)="'+thisYear+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalBuy };