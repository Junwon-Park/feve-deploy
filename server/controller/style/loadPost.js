const { Post, User } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadAllPost(req, res, next) {
    await db.sequelize
        .query(
            'select \n' +
            'p.POST_KEY\n' +
            ',p.POST_CONTENT\n' +
            ',p.POST_WDATE\n' +
            ',p.POST_PIC \n' +
            ',u.USER_KEY \n' +
            ',u.USER_ID\n' +
            'from Post p\n' +
            'inner join User u on p.USER_KEY = u.USER_KEY  \n;'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

async function loadPost(req, res, next) {
    const user_key = req.body.USER_KEY;

  await db.sequelize
      .query(
          'select \n' +
          'p.POST_KEY\n' +
          ',p.POST_CONTENT\n' +
          ',p.POST_WDATE\n' +
          ',p.POST_PIC \n' +
          ',u.USER_KEY \n' +
          ',u.USER_ID\n' +
          'from Post p\n' +
          'inner join User u on p.USER_KEY = u.USER_KEY  \n' +
          'where p.USER_KEY='+user_key+';'
          ,{ type: Sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(err));
}




module.exports = { loadAllPost, loadPost };
