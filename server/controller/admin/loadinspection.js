const { Product } = require('../../models');
const { Inspection } = require('../../models');
const { Category } = require('../../models');
const { User } = require('../../models');
const db = require('../../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function loadinspection(req, res, next) {
  await Inspection.findAll({
       include: [
            {
                model: Product,
                include:[{
                    model: Category,
                    attributes:['CATEGORY_KEY','CATEGORY_DESC', 'CATEGORY_NAME', 'CATEGORY_PARENT'],
                    include: [{
                            model: Category,
                        as: category,
                        where: {
                                PRODUCT_NAME: sequelize.col('category.CATEGORY_PARENT')
                        }
                        }],
                }],
            },{
                model: User,
               attributes:['USER_ID']
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
