const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
        res.json(result);
      })
      .catch(err => console.log(err));
}

module.exports = { loadinspecone };
