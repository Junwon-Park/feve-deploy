const { Product } = require('../../models');
const { Inspection } = require('../../models');
const { Category } = require('../../models');
const { User } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment=require('moment');

async function loadTotalcntinspection(req, res, next) {
    await db.sequelize
        .query(
            'select count(*)as totalCnt from inspection;',
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

async function loadinspection(req, res, next) {
    const start = req.body.limitStart;
    const end = req.body.limitEnd;
    await db.sequelize
        .query(
           `select
                INSPECTION_KEY
                 ,INSPECTION_DATE
               -- ,INSPECTION_RESULT
                -- ,INSPECTION_STATUS
                ,(case when INSPECTION_STATUS=0 then '검수중' when INSPECTION_STATUS=1 then '검수완료' when INSPECTION_STATUS then '반송' end ) as INSPECTION_STATUS
                ,(case when INSPECTION_RESULT=0 then '불합격' when INSPECTION_RESULT=1 then '합격' when INSPECTION_RESULT IS NULL then '미정' end ) as INSPECTION_RESULT
                 ,INSPECTION_ADATE
                 ,INSPECTION_RDATE
                 ,i.PRODUCT_KEY
                 ,u.USER_ID
                 ,u.USER_KEY
                 ,p.PRODUCT_NAME
                 ,p.PRODUCT_ORIPRICE
                 ,c.CATEGORY_DESC  as PRODUCT_CATE
                 ,ct.CATEGORY_DESC as PRODUCT_BRAND
            from Inspection i
                     inner join product p on i.PRODUCT_KEY = p.PRODUCT_KEY
                     inner join user u on u.USER_KEY = i.USER_KEY
                     inner join category c on p.PRODUCT_CATE  = c.CATEGORY_KEY
                     inner join category ct on c.CATEGORY_PARENT = ct.CATEGORY_NAME `+
                'limit '+start+', '+end+';'
           , { type: Sequelize.QueryTypes.SELECT }
        )
    .then((result) => {
      console.log(result);

        result.map(x=> {
            if (x.INSPECTION_DATE != null) {
                x.INSPECTION_DATE = moment(x.INSPECTION_DATE).format('YYYY-MM-DD HH:mm:ss');
            }
            if (x.INSPECTION_ADATE != null) {
                x.INSPECTION_ADATE = moment(x.INSPECTION_ADATE).format('YYYY-MM-DD HH:mm:ss');
            }
            if (x.INSPECTION_RDATE != null) {
                x.INSPECTION_RDATE = moment(x.INSPECTION_RDATE).format('YYYY-MM-DD HH:mm:ss');
            }
        })
      res.json(result);
    })
    .catch((err) => console.log(err));
}

async function loadinspecone(req, res, next) {
    const sendProductKey = req.body.sendProductKey;
    const receivedUserid = req.body.sendUserid;

    console.log(sendProductKey,receivedUserid )

    await db.sequelize
        .query(
            "select\n\
             INSPECTION_KEY\n\
             ,INSPECTION_DATE\n\
             ,INSPECTION_RESULT\n\
             ,INSPECTION_ADATE\n\
             ,INSPECTION_RDATE\n\
             ,INSPECTION_STATUS\n\
            --  ,(case when INSPECTION_STATUS=0 then '검수중' when INSPECTION_STATUS=1 then '검수완료' when INSPECTION_STATUS then '반송' end ) as INSPECTION_STATUS\n\
             ,i.PRODUCT_KEY\n\
             ,u.USER_ID\n\
             ,p.PRODUCT_NAME\n\
             ,p.PRODUCT_ORIPRICE\n\
             ,p.PRODUCT_MNUM\n\
             ,c.CATEGORY_DESC  as PRODUCT_CATE\n\
             ,ct.CATEGORY_DESC as PRODUCT_BRAND\n\
             from Inspection i\n\
             inner join product p on i.PRODUCT_KEY = p.PRODUCT_KEY\n\
             inner join user u on u.USER_KEY = i.USER_KEY\n\
             inner join category c on p.PRODUCT_CATE  = c.CATEGORY_KEY\n\
             inner join category ct on c.CATEGORY_PARENT = ct.CATEGORY_NAME\n\
             where i.PRODUCT_KEY="+sendProductKey+" and u.user_id='"+receivedUserid+"';",
            { type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);

            result.map(x=>{
                if (x.INSPECTION_DATE != null) {
                    x.INSPECTION_DATE = moment(x.INSPECTION_DATE).format('YYYY-MM-DD HH:mm:ss');
                }
                if (x.INSPECTION_ADATE != null) {
                    x.INSPECTION_ADATE = moment(x.INSPECTION_ADATE).format('YYYY-MM-DD HH:mm:ss');
                }
                if (x.INSPECTION_RDATE != null) {
                    x.INSPECTION_RDATE = moment(x.INSPECTION_RDATE).format('YYYY-MM-DD HH:mm:ss');
                }
            })
            res.json(result);
        })
        .catch(err => console.log(err));
}

async function loadinspectionLimit(req, res, next) {
    await db.sequelize
        .query(
            `select
                INSPECTION_KEY
                 ,INSPECTION_DATE
                ,INSPECTION_RESULT
                 ,INSPECTION_ADATE
                 ,INSPECTION_RDATE
                 ,i.PRODUCT_KEY
                 ,u.USER_ID
                 ,p.PRODUCT_NAME
                 ,p.PRODUCT_ORIPRICE
                 ,c.CATEGORY_DESC  as PRODUCT_CATE
                 ,ct.CATEGORY_DESC as PRODUCT_BRAND
            from Inspection i
                     inner join product p on i.PRODUCT_KEY = p.PRODUCT_KEY
                     inner join user u on u.USER_KEY = i.USER_KEY
                     inner join category c on p.PRODUCT_CATE  = c.CATEGORY_KEY
                     inner join category ct on c.CATEGORY_PARENT = ct.CATEGORY_NAME
              limit 0,5;`
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log(result);
            result.map(x=>{
                if (x.INSPECTION_DATE != null) {
                    x.INSPECTION_DATE = moment(x.INSPECTION_DATE).format('YYYY-MM-DD HH:mm:ss');
                }
                if (x.INSPECTION_ADATE != null) {
                    x.INSPECTION_ADATE = moment(x.INSPECTION_ADATE).format('YYYY-MM-DD HH:mm:ss');
                }
                if (x.INSPECTION_RDATE != null) {
                    x.INSPECTION_RDATE = moment(x.INSPECTION_RDATE).format('YYYY-MM-DD HH:mm:ss');
                }
            })
            res.json(result);
        })
        .catch((err) => console.log(err));
}

module.exports = { loadinspection, loadTotalcntinspection,loadinspecone,loadinspectionLimit  };
