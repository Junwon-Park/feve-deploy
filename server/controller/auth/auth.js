const jwt = require('jsonwebtoken');
const { config } = require('../../config');
const { User } = require('../../models');

const auth = async (req, res) => {
  const userToken = req.headers.authorization.split(' ')[1];

  jwt.verify(userToken, config.jwt.accessKey, async (err, decoded) => {
    if (err) {
      console.error('Token error!!!', err);
      res.status(403).json({ data: null, message: 'Token is invalid' });
    } else {
      const { USER_KEY } = decoded;
      const checkUser = await User.findOne({ where: { USER_KEY } });
      if (!checkUser)
        res.status(403).json({ data: null, message: 'Not authorized' });
      else {
        res.json({
          data: { accessToken: userToken },
          message: 'Auth successed!!!'
        });
      }
    }
  });
};

module.exports = { auth };
