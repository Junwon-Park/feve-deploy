const sequelize = require('sequelize');
const { User } = require('../../models');

async function getProfile(req, res) {
  await User.findOne({
        attributes:['USER_NAME', 'USER_MAIL'],
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

module.exports = { getProfile };