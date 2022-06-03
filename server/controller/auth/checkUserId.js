const { User } = require('../../models');

const checkId = async (req, res) => {
  console.log('ID', req.body);
  const { USER_ID } = req.body;

  const checkUserId = await User.findOne({ where: { USER_ID } }).catch(
    (err) => {
      console.error('checkUserId error', err);
    }
  );
  console.log('userid!!!', checkUserId.USER_ID); // 여기 까지 출력 됨
  if (!checkUserId) {
    // if문 실행 안됨, if문 없으면 아래 console.log는 되는데 여전히 응답은 안감
    console.log('들어온거???????????????????????', checkUserId);
    res.json({ data: { checkUserId }, message: 'This ID is available!!!' });
  } else {
    res.status(409).json({ message: 'This ID is already exists!!!' });
  }
};

module.exports = { checkId };
