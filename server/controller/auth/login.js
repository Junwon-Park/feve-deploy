const bcrypt = require('bcrypt');
const { User } = require('../../models');
const {
  genAccToken,
  genRefToken
} = require('../../middleware/auth/aboutTokens.js');

const login = async (req, res) => {
  const { USER_ID, USER_PASSWORD } = req.body;
  const checkUser = await User.findOne({
    where: { USER_ID }
  });
  if (!checkUser)
    res.status(403).json({ data: null, message: 'Invalid user!!!' });
  else {
    const { USER_ID, USER_MAIL } = checkUser;

    // Decoded hash
    const decodedResult = await bcrypt.compare(
      USER_PASSWORD,
      checkUser.USER_PASSWORD
    );
    if (!decodedResult)
      res
        .status(403) // Unauthorized
        .json({ data: null, message: 'Not authorized' });
    else {
      const accessToken = await genAccToken(checkUser);
      const refreshToken = await genRefToken(checkUser);

      res
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          sameSite: 'None',
          secure: true,
          maxAge: 72 * 60 * 60 * 10000 // 30d
        })
        .json({
          data: { accessToken, USER_ID, USER_MAIL },
          message: 'Login successed!!!'
        });
    }
  }
};

module.exports = { login };
