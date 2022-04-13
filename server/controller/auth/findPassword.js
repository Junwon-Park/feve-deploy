const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { config } = require('../../config');

const findPassword = async (req, res) => {
  const { USER_ID, USER_MAIL, inputNewPassword } = req.body;

  const userFind = await User.findOne({ where: { USER_ID, USER_MAIL } });

  if (!userFind) res.status(403).json({ message: 'Invalid user!!!' });
  else {
    bcrypt.hash(
      inputNewPassword,
      config.bcrypt.saltRounds,
      async (err, hashed) => {
        if (err) return console.error('Update is failed!!!', new Error(err));
        else {
          User.update(
            { USER_PASSWORD: hashed },
            {
              where: {
                USER_ID,
                USER_MAIL
              }
            }
          )
            .then((result) => {
              res.json({ data: result[0], message: 'Update successed!!!' });
            })
            .catch((err) => {
              if (err)
                return console.error('Update is failed!!!', new Error(err));
            });
        }
      }
    );
  }
};

module.exports = { findPassword };
