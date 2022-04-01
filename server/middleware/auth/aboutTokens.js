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

const decodedRefToken = async (refToken) => {
  const decoded = await jwt.verify(refToken, config.jwt.refreshKey);
  return decoded;
};

const decodedAccToken = async (accToken) => {
  const decoded = await jwt.verify(accToken, config.jwt.accessKey);
  return decoded;
};

module.exports = { genAccToken, genRefToken, decodedRefToken, decodedAccToken };
