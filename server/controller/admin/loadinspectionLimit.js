const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadinspectionLimit(req, res, next) {
  await Inspection.findall(

    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadinspectionLimit };
