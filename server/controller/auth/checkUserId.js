const { User } = require('../../models');

const checkId = async (req, res) => {
  console.log('ID', req.body);
  const { USER_ID } = req.body;

  const checkUserId = await User.findOne({ where: { USER_ID } }).catch(
    (err) => {
      console.error('checkUserId error', err);
    }
  );

  if (!checkUserId) {
    console.log(checkUserId);
    res.json({ data: { checkUserId }, message: 'This ID is available!!!' });
  } else {
    res.status(409).json({ message: 'This ID is already exists!!!' });
  }
};

module.exports = { checkId };
