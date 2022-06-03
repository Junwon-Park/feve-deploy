const { config } = require('../../config.js');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

const saveUserInfo = async (req, res) => {
  const {
    USER_NAME,
    USER_MAIL,
    USER_PHONE,
    USER_ADDRESS1,
    USER_ADDRESS2,
    POST_CODE,
    accessToken
  } = req.body;
  console.log('usermail!!!', req.body);
  bcrypt.hash(USER_MAIL, config.bcrypt.saltRounds, async (err, hashed) => {
    if (err) console.error(new Error(err));
    else {
      let now = new Date();
      const [user, created] = await User.findOrCreate({
        where: {
          USER_ID: USER_MAIL
        },
        defaults: {
          USER_ID: USER_MAIL,
          USER_PASSWORD: hashed,
          USER_NAME,
          USER_MAIL,
          USER_PHONE,
          USER_ADDRESS1,
          USER_ADDRESS2,
          POST_CODE,
          createdAt: now
        }
      });

      if (!created)
        res
          .status(409) // Conflict
          .json({ message: 'Save user infomation failed!!!' });
      else {
        const { USER_KEY, USER_ID, USER_MAIL } = user;

        res
          .status(201)
          .json({ data: { USER_KEY, USER_ID, USER_MAIL, accessToken } });
      }
    }
  });
};

module.exports = { saveUserInfo };
