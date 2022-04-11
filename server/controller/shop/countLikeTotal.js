const { Favorite } = require("../../models");
const db = require("../../models");

async function countLikeTotal(req, res, next) {

    //console.log("****************countliketotal갯수************");
    const product_key= req.body.product_key;
    //console.log("product_key의 vale는? ", product_key);

    await Favorite.count({
        
        where:{
        PRODUCT_KEY: product_key,
        }
    })
        .then(result => {
            //console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports = { countLikeTotal };