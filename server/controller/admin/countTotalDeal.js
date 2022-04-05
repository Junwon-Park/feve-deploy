const { Sell } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalDeal(req, res, next) {
    const date = new Date();
    const thisMonth= date.getMonth().toString();
    console.log("이번달:::::::::::::::",thisMonth)

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
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalDeal };