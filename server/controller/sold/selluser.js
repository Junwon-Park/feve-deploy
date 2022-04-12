const { User } = require("../../models");
const db = require("../../models");
const sequelize = require("sequelize");

async function selluser(req, res, next) {
  let user = req.body.user_key;
  await User.findOne({
    attributes: ['USER_NAME','USER_PHONE', 'USER_ADDRESS1'],
    where: {
      USER_KEY: user  //user
    }
})
    .then(result => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err));

}

module.exports = { selluser };