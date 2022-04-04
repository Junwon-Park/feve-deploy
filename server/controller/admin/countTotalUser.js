const { User } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function countTotalUser(req, res, next) {
    const date = new Date();
    const thisYear= date.getFullYear().toString();
    console.log(thisYear)
    await db.sequelize
        .query(
            ' SELECT COUNT(*) as cnt \n' +
            ' FROM User \n' +
            'where YEAR(createdAt)="'+thisYear+'";',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countTotalUser };