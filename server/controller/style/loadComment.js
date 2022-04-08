const { PostComment } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');

async function loadComment(req, res, next) {
    const post_key = req.body.POST_KEY;
    await db.sequelize
        .query(
            'select \n' +
            'c.COMMENT_KEY\n' +
            ',c.COMMENT_CONTENT\n' +
            ',c.COMMENT_WDATE\n' +
            ',c.POST_KEY\n' +
            ',c.USER_KEY\n' +
            ',u.USER_ID\n' +
            'from PostComment c\n' +
            'inner join USER u on c.USER_KEY = u.USER_KEY;'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => console.log(err));
}

module.exports = { loadComment };
