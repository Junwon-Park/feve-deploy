const { default: axios } = require('axios');
const { config } = require('../../config.js');
const { getGoogleUserProfile } = require('../../middleware/auth/aboutOauth.js');

const googleOauth = async (req, res) => {
  const authorizationCode = req.body.authorizationCode;
  const getTokenAPI = `https://oauth2.googleapis.com/token?code=${authorizationCode}&client_id=${config.oAuth.google.clientId}&client_secret=${config.oAuth.google.clientSecret}&redirect_uri=${config.redirectUrl}&grant_type=${config.oAuth.google.grantType}`;

  const googleResponse = await axios
    .post(`${getTokenAPI}`, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    .catch((err) => console.error('Google oauth access token error!!!', err));

  if (!googleResponse) {
    return res.json({ message: 'Google login is failed!!!' });
  } else {
    const accessToken = googleResponse.data.access_token;

    if (accessToken) {
      const userInfo = await getGoogleUserProfile(accessToken);
      console.log(userInfo);
      res.json({
        data: { accessToken, userInfo: userInfo.data },
        message: 'Google login seccess!!!'
      });
    }
  }
};

module.exports = { googleOauth };
