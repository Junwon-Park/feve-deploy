const { User } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countDeal(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    console.log(thisYear)
    await db.sequelize
        .query(
            'select SUBSTRING_INDEX(a.Date, \'-\',-1) as month, u.cnt\n'+
            'from (\n' +
            '    select \n' +
            '\t\tdate_format("2022-12-31" - INTERVAL (a.a) month , \'%Y-%m\') as date\n' +
            '    from (select 0 as a union all select 1 union all select 2 union all select 3 union all \n' +
            '                select 4 union all select 5 union all select 6 union all select 7 union all \n' +
            '                select 8 union all  select 9 union all select 10 union all select 11 ) as a\n' +
            ') a\n' +
            'left outer join (select date_format(sell_edate, \'%Y-%m\') as sdate, count(*) as cnt from Sell  where sell_status="1" group by sdate)u on u.sdate = a.date\n' +
            'where a.Date between date_format( DATE_ADD("'+thisYear+'-12-31", INTERVAL - 1 year ), \'%Y-%m\') and date_format("'+thisYear+'-12-31", \'%Y-%m\')  order by a.date asc;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}


async function countUser(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    console.log(thisYear)
    await db.sequelize
        .query(
            'select SUBSTRING_INDEX(a.Date, \'-\',-1) as month, u.cnt\n'+
            'from (\n' +
            '    select \n' +
            '\t\tdate_format("2022-12-31" - INTERVAL (a.a) month , \'%Y-%m\') as date\n' +
            '    from (select 0 as a union all select 1 union all select 2 union all select 3 union all \n' +
            '                select 4 union all select 5 union all select 6 union all select 7 union all \n' +
            '                select 8 union all  select 9 union all select 10 union all select 11 ) as a\n' +
            ') a\n' +
            'left outer join (select date_format(createdAt, \'%Y-%m\') as sdate, count(*) as cnt from User group by sdate)u on u.sdate = a.date\n' +
            'where a.Date between date_format( DATE_ADD("'+thisYear+'-12-31", INTERVAL - 1 year ), \'%Y-%m\') and date_format("'+thisYear+'-12-31", \'%Y-%m\')  order by a.date asc;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}


async function countBidSell(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    console.log(thisYear)
    await db.sequelize
        .query(
            'select SUBSTRING_INDEX(a.Date, \'-\',-1) as month, u.cnt\n'+
            'from (\n' +
            '    select \n' +
            '\t\tdate_format("2022-12-31" - INTERVAL (a.a) month , \'%Y-%m\') as date\n' +
            '    from (select 0 as a union all select 1 union all select 2 union all select 3 union all \n' +
            '                select 4 union all select 5 union all select 6 union all select 7 union all \n' +
            '                select 8 union all  select 9 union all select 10 union all select 11 ) as a\n' +
            ') a\n' +
            'left outer join (select date_format(sell_edate, \'%Y-%m\') as sdate, count(*) as cnt from Sell  where sell_status="1" or sell_status="0" or sell_status="3" group by sdate)u on u.sdate = a.date\n' +
            'where a.Date between date_format( DATE_ADD("'+thisYear+'-12-31", INTERVAL - 1 year ), \'%Y-%m\') and date_format("'+thisYear+'-12-31", \'%Y-%m\')  order by a.date asc;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}


async function countBidBuy(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    console.log(thisYear)
    await db.sequelize
        .query(
            'select SUBSTRING_INDEX(a.Date, \'-\',-1) as month, u.cnt\n'+
            'from (\n' +
            '    select \n' +
            '\t\tdate_format("2022-12-31" - INTERVAL (a.a) month , \'%Y-%m\') as date\n' +
            '    from (select 0 as a union all select 1 union all select 2 union all select 3 union all \n' +
            '                select 4 union all select 5 union all select 6 union all select 7 union all \n' +
            '                select 8 union all  select 9 union all select 10 union all select 11 ) as a\n' +
            ') a\n' +
            'left outer join (select date_format(buy_edate, \'%Y-%m\') as sdate, count(*) as cnt from Buy  where buy_status="1" or buy_status="0" or buy_status="3"group by sdate)u on u.sdate = a.date\n' +
            'where a.Date between date_format( DATE_ADD("'+thisYear+'-12-31", INTERVAL - 1 year ), \'%Y-%m\') and date_format("'+thisYear+'-12-31", \'%Y-%m\')  order by a.date asc;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countDeal, countUser, countBidSell, countBidBuy };