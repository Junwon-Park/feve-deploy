const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');

async function loadinspection(req, res, next) {
  await Inspection.findAll({

      })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { loadinspection };
