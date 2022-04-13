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

async function unfollow(req, res, next) {
    const follower_id=req.body.follower_id;
    const following_id = req.body.following_id;

    await Follow.destroy({
        where:{
            FOLLOWER_ID: follower_id,
            FOLLOWING_ID: following_id,
        }
    })
        .then(result => {
            console.log(result);
            res.send(result.toString());
        })
        .catch(err => console.log(err));
}

async function isfollow(req, res, next) {
    const follower_id=req.body.follower_id;
    const following_id = req.body.following_id;

    await Follow.findAll({
        where:{
            FOLLOWER_ID: follower_id,
            FOLLOWING_ID: following_id,
        }
    })
        .then(result => {
            console.log("is follow?????",result);
            res.send(result.toString());
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

async function loadFollower(req, res, next) {
    const user_key=req.body.user_key;
    await db.sequelize
        .query(
            'SELECT \n' +
            'FOLLOWER_ID \n' +
            ',u.USER_ID\n' +
            'from follow f\n' +
            'inner join user u \n' +
            'on u.USER_KEY =f.FOLLOWER_ID\n' +
            'where f.FOLLOWING_ID = ' +user_key + ';'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

async function loadFollowing(req, res, next) {
    const user_key=req.body.user_key;
    await db.sequelize
        .query(
            'SELECT \n' +
            'FOLLOWING_ID \n' +
            ',u.USER_ID\n' +
            'from follow f\n' +
            'inner join user u \n' +
            'on u.USER_KEY =f.FOLLOWING_ID\n' +
            'where f.FOLLOWER_ID = ' +user_key + ';'
            ,{ type: Sequelize.QueryTypes.SELECT }
        )
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { follow, unfollow, isfollow, followerCount, followingCount, loadFollower, loadFollowing };