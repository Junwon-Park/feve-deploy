const { Follow } = require("../../models");
const db = require("../../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function follow(req, res, next) {
    const follower_id=req.body.follower_id;
    const following_id = req.body.following_id;

    await Follow.create({
        FOLLOWER_ID: follower_id,
        FOLLOWING_ID: following_id,
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function followerCount(req, res, next) {
    const user_key=req.body.user_key;

    await Follow.findAll({
        attributes:[
            [db.sequelize.fn('count', db.sequelize.col('FOLLOWER_ID')), 'cnt'],
        ],
        where:{
            FOLLOWER_ID: user_key
        }
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function followingCount(req, res, next) {
    const user_key=req.body.user_key;

    await Follow.findAll({
        attributes:[
            [db.sequelize.fn('count', db.sequelize.col('FOLLOWING_ID')), 'cnt'],
        ],
        where:{
            FOLLOWING_ID: user_key
        }
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { follow, followerCount, followingCount };