const sequelize = require('sequelize');
const { User } = require('../../models');

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
    console.log(key,name,password, mail, phone, add1, add2, pCode);

    await User.update(
        {
            USER_NAME: name,
            USER_PASSWORD: password,
            USER_MAIL: mail,
            USER_PHONE: phone,
            USER_ADDRESS1: add1,
            USER_ADDRESS2: add2,
            POST_CODE: pCode,
        }, 
        {
            where: {
                USER_KEY: key,
            }
        }
    )
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));
}

module.exports = { getProfile, updateProfile };