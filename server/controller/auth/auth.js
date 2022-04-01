const {
  genAccToken,
  decodedAccToken,
  decodedRefToken
} = require('../../middleware/auth/aboutTokens');
const { User } = require('../../models');

const auth = async (req, res) => {
  console.log(req.headers.cookie);
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    if (!req.headers.cookie) {
      res.status(403).json({ data: null, message: 'Not authorized' });
    } else {
      const refToken = req.headers.cookie.split('=')[1];
      const decoded = await decodedRefToken(refToken);

      const { USER_KEY, USER_ID, USER_MAIL } = decoded;
      const searchUser = await User.findOne({ where: { USER_KEY } });
      if (!searchUser)
        res.status(403).json({
          data: null,
          message: 'Invalid user!!!'
        });
      else {
        const accessToken = await genAccToken(searchUser);
        console.log(accessToken);
        res.json({
          data: { accessToken, USER_ID, USER_MAIL },
          message: 'Login successed!!!'
        });
      }
    }
  } else {
    const userToken = req.headers.authorization.split(' ')[1];
    const decoded = await decodedAccToken(userToken);

    const { USER_KEY } = decoded;
    const checkUser = await User.findOne({ where: { USER_KEY } });
    if (!checkUser) {
      res.status(403).json({ data: null, message: 'Not authorized' });
    } else {
      res.json({
        data: { accessToken: userToken },
        message: 'Auth successed!!!'
      });
    }
  }
};

module.exports = { auth };
