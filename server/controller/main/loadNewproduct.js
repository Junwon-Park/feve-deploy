const { Product } = require('../../models');
const { Category } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadNewproduct(req, res, next) {
  await db.sequelize
    .query(
      'SELECT \n' +
        'PRODUCT_KEY \n' +
        ',PRODUCT_NAME \n' +
        ',PRODUCT_MNUM \n' +
        ',PRODUCT_ORIPRICE \n' +
        ',PRODUCT_DELETE \n' +
        ',PRODUCT_WDATE \n' +
        ',PRODUCT_PIC \n' +
        ',c.CATEGORY_DESC  as PRODUCT_CATE \n' +
        ',ct.CATEGORY_desc  as PRODUCT_BRAND \n' +
        'from Product\n' +
        'left outer join Category c on c.CATEGORY_KEY =PRODUCT_CATE \n' +
        'left outer join Category ct on c.CATEGORY_parent=ct.CATEGORY_NAME\n'+
        'where PRODUCT_DELETE = "0" order by PRODUCT_WDATE DESC  limit 0, 8',
      { type: Sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadNewproduct };
