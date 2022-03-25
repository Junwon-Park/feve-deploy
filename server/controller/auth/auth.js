const jwt = require('jsonwebtoken');

const auth = async (req, res) => {
  res.send('auth!!!');
};

module.exports = { auth };
