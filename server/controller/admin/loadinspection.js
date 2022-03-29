const { Product } = require('../../models');
const { Inspection } = require('../../models');
const { User } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadinspection(req, res, next) {
  await Inspection.findAll({
        attributes:['INSPECTION_KEY', 'INSPECTION_DATE', 'INSPECTION_STATUS', 'INSPECTION_RESULT', 'INSPECTION_ADATE', 'INSPECTION_RDATE', 'USER_KEY', 'PRODUCT_KEY'],
          include: [
            {
                model: Product,
                attributes: ['PRODUCT_NAME', 'PRODUCT_BRAND', 'PRODUCT_ORIPRICE', 'PRODUCT_CATE', 'PRODUCT_KEY']
            },{
            model: User,
                attributes: ['USER_ID', 'USER_ADDRESS1', 'USER_ADDRESS2', 'USER_PHONE']
            }
          ]
      })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadinspection };
