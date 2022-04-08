const { Post, Hashtag } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function addPost(req, res, next) {
   const post_pic = req.body.post_pic;
   const post_contents = req.body.post_contents;
   const user_key = req.body.user_key;
   const hashtag = req.body.hashtag;

    console.log("post::::::", post_pic, post_contents)

    await Post.create({
        POST_CONTENT: post_contents,
        POST_PIC: post_pic,
        POST_WDATE: Sequelize.fn('NOW'),
        USER_KEY: user_key,
    })
        .then(result => {
            console.log(result);
            const post_key = result.dataValues.POST_KEY;
            hashtag.forEach((one)=> {
                Hashtag.create({
                    POST_KEY: post_key,
                    HASHTAG_TITLE: one,
                })
            })
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { addPost };