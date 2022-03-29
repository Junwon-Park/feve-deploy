const { Product } = require('../../models');
const { Inspection } = require('../../models');
const { User } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadinspection(req, res, next) {
  await Inspection.findAll({
       include: [
            {
                model: Product
            },{
                model: User
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
