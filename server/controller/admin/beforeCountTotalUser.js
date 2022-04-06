const { User } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function beforeCountTotalUser(req, res, next) {
    const date = new Date();
    const thisYear= (date.getFullYear()-1).toString();
    const thisMonth= date.getMonth().toString();
    const thisDate= (date.getDate()-1).toString();
    console.log("이번달:::::::::::::::::::",thisMonth)
    await db.sequelize
        .query(
            ' SELECT COUNT(*) as cnt \n' +
            ' FROM User \n' +
            'where MONTH(createdAt)="'+thisMonth+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { beforeCountTotalUser };