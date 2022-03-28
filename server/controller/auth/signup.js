const bcrypt = require('bcrypt');
const { config } = require('../../config');
const {
  genRefToken,
  genAccToken
} = require('../../middleware/auth/aboutTokens');
const { User } = require('../../models');

const signup = async (req, res) => {
  const {
    USER_ID,
    USER_PASSWORD,
    USER_NAME,
    USER_MAIL,
    USER_PHONE,
    USER_ADDRESS1,
    USER_ADDRESS2,
    USER_DELETE,
    USER_ADMIN
  } = req.body;

  bcrypt.hash(USER_PASSWORD, config.bcrypt.saltRounds, async (err, hashed) => {
    if (err) console.error(new Error(err));
    else {
      let now = new Date();
      const [user, created] = await User.findOrCreate({
        where: {
          USER_ID,
          USER_PASSWORD: hashed,
          USER_NAME,
          USER_MAIL,
          USER_PHONE,
          USER_ADDRESS1,
          USER_ADDRESS2,
          USER_DELETE,
          USER_ADMIN
        },
        defaults: {
          createdAt: now
        }
      });

      if (!created)
        res
          .status(409) // Conflict
          .json({ message: 'Signup failed' });
      else {
        const accessToken = await genAccToken(user);
        const refreshToken = await genRefToken(user);

        res
          .status(201)
          .cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 72 * 60 * 60 * 10000 // 30d
          })
          .json({ data: { accessToken, USER_ID } });
      }
    }
  });
};

module.exports = { signup };
