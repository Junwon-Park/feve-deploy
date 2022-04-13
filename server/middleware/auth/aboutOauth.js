const axios = require('axios');

const getGoogleUserProfile = async (accessToken) => {
  const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`;
  const userInfo = await axios
    .get(googleAPI, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })
    .catch((err) => {
      console.error('Google get user information error!!!', err);
    });
  return userInfo;
};

module.exports = { getGoogleUserProfile };
