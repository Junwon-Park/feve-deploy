const { User } = require('../../models');

async function getSimpleUserInfo(req, res, next) {
  await User.findOne({
        attributes:['USER_NAME', 'USER_MAIL'],
        where:{
            USER_KEY: req.body.USER_KEY,
        }
    })
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { getSimpleUserInfo };
