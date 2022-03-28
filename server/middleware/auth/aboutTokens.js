const jwt = require('jsonwebtoken');
const { config } = require('../../config.js');

const genAccToken = async (source) => {
  const { USER_KEY, USER_NAME, USER_MAIL, createdAt } = source;
  const accessToken = await jwt.sign(
    { USER_KEY, USER_NAME, USER_MAIL, createdAt },
    config.jwt.accessKey,
    { expiresIn: config.jwt.accExpiresIn }
  );
  return accessToken;
};

const genRefToken = async (source) => {
  const { USER_KEY, USER_NAME, USER_MAIL, createdAt } = source;
  const refeshToken = await jwt.sign(
    { USER_KEY, USER_NAME, USER_MAIL, createdAt },
    config.jwt.refreshKey,
    { expiresIn: config.jwt.refExpiresIn }
  );
  return refeshToken;
};

module.exports = { genAccToken, genRefToken };
