const { Post } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function addPost(req, res, next) {
   const post_pic = req.body.post_pic;
   const post_contents = req.body.post_contents;
   const user_key = req.body.user_key;

    console.log("post::::::", post_pic, post_contents)

    await Post.create({
        POST_CONTENT: post_contents,
        POST_PIC: post_pic,
        POST_WDATE: Sequelize.fn('NOW'),
        USER_KEY: user_key,
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { addPost };