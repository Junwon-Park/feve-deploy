const sequelize = require('sequelize');
const db = require('../../models');
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { config } = require('../../config');

async function getProfile(req, res) {
  await User.findOne({
        where:{
            USER_KEY: req.body.USER_KEY,
        }
    })
    .then((result) => {
        console.log("simpleUserInfo has been responsed from db : ",result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

async function updateProfile(req, res) {
    const key = req.body.USER_KEY;
    const name = req.body.USER_NAME;
    const password = req.body.USER_PASSWORD;
    const mail = req.body.USER_MAIL;
    const phone = req.body.USER_PHONE;
    const add1 = req.body.USER_ADDRESS1;
    const add2 = req.body.USER_ADDRESS2;
    const pCode = req.body.POST_CODE;
    console.log(name, password, mail, phone, add1, add2, pCode);

    if(password == null || password =="")
    {
        let query = `UPDATE User
        SET
            USER_NAME= '${name}'
            ,USER_MAIL= '${mail}'
            ,USER_PHONE= '${phone}'
            ,USER_ADDRESS1= '${add1}'
            ,USER_ADDRESS2= '${add2}'
            ,POST_CODE= '${pCode}'
        WHERE USER_KEY = ${key} ;`;;

        await db.sequelize.query(query, { type: sequelize.QueryTypes.UPDATE })
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => console.log(err));
    }
    else
    {
        bcrypt.hash(password, config.bcrypt.saltRounds, async (err, hashed) => 
        {
            if(err){
                console.error(new Error(err));
                return;
            } 
            else {
                query = `UPDATE User
                SET
                    USER_NAME= '${name}'
                    ,USER_MAIL= '${mail}'
                    ,USER_PHONE= '${phone}'
                    ,USER_ADDRESS1= '${add1}'
                    ,USER_ADDRESS2= '${add2}'
                    ,POST_CODE= '${pCode}'
                    ,USER_PASSWORD= '${hashed}'
                WHERE USER_KEY = ${key} ;`;

                await db.sequelize.query(query, { type: sequelize.QueryTypes.UPDATE })
                .then(result => {
                    console.log(result);
                    res.json(result);
                })
                .catch(err => console.log(err));
            }
        })
    }
}

module.exports = { getProfile, updateProfile };