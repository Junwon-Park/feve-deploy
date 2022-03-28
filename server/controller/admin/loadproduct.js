const { Product } = require('../../models');
const { Category } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadproduct(req, res, next) {
  await db.sequelize
    .query(
      'SELECT \n' +
        'PRODUCT_KEY \n' +
        ',PRODUCT_NAME \n' +
        ',PRODUCT_MNUM \n' +
        ',PRODUCT_ORIPRICE \n' +
        ',c.CATEGORY_DESC  as PRODUCT_CATE \n' +
        ',ct.CATEGORY_desc  as PRODUCT_BRAND \n' +
        'from Product\n' +
        'left outer join Category c on c.CATEGORY_KEY =PRODUCT_CATE \n' +
        'left outer join Category ct on c.CATEGORY_parent=ct.CATEGORY_NAME;',
      { type: Sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadproduct };
