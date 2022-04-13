const { Cscenter } = require("../../models");
const { User } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');

async function totalcscenter(req, res, next){
    await db.sequelize
    .query(
        'select count(*)as totalCnt from cscenter;',
        { type: Sequelize.QueryTypes.SELECT }
    )
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(err => console.log(err));
}

async function cscenter(req, res, next) {
    const start = req.body.limitStart;
    const end = req.body.limitEnd;
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
                 ,( select USER_NAME from User where USER_KEY=c.USER_KEY) as USER_NAME
            from Cscenter c
                     inner join User u on u.USER_KEY = c.USER_KEY `+
            'limit '+start+', '+end+';'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            result.map(x=>{
                console.log(x.CSCENTER_WDATE)
                x.CSCENTER_WDATE=moment(x.CSCENTER_WDATE).format('YYYY-MM-DD HH:mm:ss')
            })
            res.send(result);
        })
        .catch(err => console.log(err));
}
async function cscenterone(req, res, next) {
    const sendCscenterKey = req.body.sendCscenterKey;
    const receivedUserkey = req.body.sendUserkey;

    console.log(sendCscenterKey,receivedUserkey )

    await db.sequelize
        .query(
            "select\n\
        CSCENTER_KEY\n\
       ,CSCENTER_TITLE\n\
       ,(case when CSCENTER_STATUS=0 then '답변중' when CSCENTER_STATUS=1 then '답변완료' end ) as CSCENTER_STATUS\n\
       ,CSCENTER_WDATE\n\
       ,CSCENTER_CONTENTS\n\
       ,CSCENTER_COMMENT\n\
       ,CSCENTER_COMMENT_WDATE\n\
       ,( select USER_NAME from User where USER_KEY=c.USER_KEY) as USER_NAME\n\
   from Cscenter c\n\
   inner join User u on u.USER_KEY = c.USER_KEY\n\
             where c.CSCENTER_KEY="+sendCscenterKey+" and u.user_key="+receivedUserkey+";",
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { cscenter, totalcscenter, cscenterone };