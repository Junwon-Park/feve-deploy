const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

async function loadinspecone(req, res, next) {
  await Inspection.findOne({
    where: {
      [Op.or]: [{ CATEGORY_NAME: "le" }, { CATEGORY_NAME: "be" }]
    }
  })
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => console.log(err));
}

module.exports = { loadinspecone };
