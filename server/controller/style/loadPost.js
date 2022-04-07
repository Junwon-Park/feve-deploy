const { Post } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
//
// async function loadTotalcntProduct(req, res, next) {
//   await db.sequelize
//       .query(
//           'select count(*)as totalCnt from product;',
//           { type: Sequelize.QueryTypes.SELECT }
//       )
//       .then((result) => {
//         console.log(result);
//         res.json(result);
//       })
//       .catch((err) => console.log(err));
// }

async function loadPost(req, res, next) {
    // const start = req.body.limitStart;
    // const end = req.body.limitEnd;

  await Post.findAll({

  })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => console.log(err));
}



module.exports = { loadPost };
