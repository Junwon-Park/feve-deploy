const { Product } = require('../../models');
const { Inspection } = require('../../models');
const { Category } = require('../../models');
const { User } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function loadinspection(req, res, next) {
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
                     inner join category ct on c.CATEGORY_PARENT = ct.CATEGORY_NAME;`,
            { type: Sequelize.QueryTypes.SELECT }
        )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadinspection };
