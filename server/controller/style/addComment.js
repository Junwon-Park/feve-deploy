const { PostComment } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function addComment(req, res, next) {
   const post_key = req.body.POST_KEY;
   const user_key=req.body.USER_KEY;
   const postcomment_content=req.body.POSTCOMMENT_CONTENT;

    await PostComment.create({
        COMMENT_CONTENT: postcomment_content,
        COMMENT_WDATE:  Sequelize.fn('NOW'),
        POST_KEY:post_key,
        USER_KEY: user_key,
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function commentCount(req, res, next) {
    const post_key = req.body.POST_KEY;

    await PostComment.findAll({
        attributes:[
            [db.sequelize.fn('count', db.sequelize.col('COMMENT_KEY')), 'cnt'],
        ],
        where:{
            POST_KEY: post_key
        }
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { addComment, commentCount };