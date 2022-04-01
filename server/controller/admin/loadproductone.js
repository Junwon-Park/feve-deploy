const { Product } = require('../../models');
const { Category } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadproductone(req, res, next) {
  let sendProductKey = req.body.sendProductKey;
  let sendMnum = req.body.sendMnum;

  console.log( sendProductKey, sendMnum );

  await db.sequelize
    .query(
      'SELECT \n\
        PRODUCT_KEY \n\
        ,PRODUCT_NAME \n\
        ,PRODUCT_MNUM \n\
        ,PRODUCT_ORIPRICE \n\
        ,PRODUCT_DESC \n\
        ,PRODUCT_LDATE \n\
        ,c.CATEGORY_DESC  as PRODUCT_CATE \n\
        ,ct.CATEGORY_desc  as PRODUCT_BRAND \n\
        from Product\n\
        left outer join Category c on c.CATEGORY_KEY =PRODUCT_CATE \n\
        left outer join Category ct on c.CATEGORY_parent=ct.CATEGORY_NAME\n\
        where PRODUCT_KEY='+sendProductKey+' and PRODUCT_MNUM="'+sendMnum+'";',
      { type: Sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadproductone };
