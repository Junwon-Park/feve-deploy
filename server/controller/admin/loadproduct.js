const { Product } = require('../../models');
const { Category } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadTotalcntProduct(req, res, next) {
  await db.sequelize
      .query(
          'select count(*)as totalCnt from product;',
          { type: Sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(err));
}

async function loadproduct(req, res, next) {
    const start = req.body.limitStart;
    const end = req.body.limitEnd;

  await db.sequelize
    .query(
      'SELECT \n' +
        'PRODUCT_KEY \n' +
        ',PRODUCT_NAME \n' +
        ',PRODUCT_MNUM \n' +
        ',PRODUCT_ORIPRICE \n' +
        ',PRODUCT_DELETE \n' +
        ',c.CATEGORY_DESC  as PRODUCT_CATE \n' +
        ',ct.CATEGORY_desc  as PRODUCT_BRAND \n' +
        'from Product\n' +
        'left outer join Category c on c.CATEGORY_KEY =PRODUCT_CATE \n' +
        'left outer join Category ct on c.CATEGORY_parent=ct.CATEGORY_NAME\n' +
        'limit '+start+', '+end+';'
        ,{ type: Sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadTotalcntProduct, loadproduct };
