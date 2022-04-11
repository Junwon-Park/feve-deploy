const { Favorite } = require("../../models");
const db = require("../../models");

async function goLike(req, res, next) {

    const product_key= req.body.product_key;
    const user_key= req.body.user_key;
    //console.log("product_key의 vale는? ", product_key, "user_key의 value 는? ", user_key);
    //const user_key= 1;

    await Favorite.create({
        PRODUCT_KEY: product_key,
        USER_KEY: user_key
    })
        .then(result => {
            //console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { goLike };