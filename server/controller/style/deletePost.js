const { Post } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function deletePost(req, res, next) {
   const POST_KEY = req.body.POST_KEY;

    await Post.destroy({
        where:{
            POST_KEY: POST_KEY
        }
    })
        .then(result => {
            console.log(typeof result);
            res.send(result.toString());
        })
        .catch(err => console.log(err));
}

module.exports = { deletePost };