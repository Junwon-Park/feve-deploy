const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

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
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadinspectionLimit };
