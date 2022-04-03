const { Cscenter } = require("../../models");
const { User } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function cscenter(req, res, next) {
    await db.sequelize
        .query(
            `select
                CSCENTER_KEY
                 ,CSCENTER_TITLE
                ,(case when CSCENTER_STATUS=0 then '답변중' when CSCENTER_STATUS=1 then '답변완료' end ) as CSCENTER_STATUS
                ,CSCENTER_WDATE
                 ,CSCENTER_CONTENTS
                 ,CSCENTER_COMMENT
                 ,CSCENTER_COMMENT_WDATE
                ,u.USER_KEY
                 ,( select USER_ID from User where USER_KEY=c.USER_KEY) as USER_ID
            from Cscenter c
                     inner join User u on u.USER_KEY = c.USER_KEY;`,
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { cscenter };