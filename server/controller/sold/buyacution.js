const { Buy } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;


async function buyauction(req, res, next) {
  // let user = req.body.USER_KEY; 
  await Buy.findOne({
    attributes: ['BUY_KEY','BUY_EDATE', 'BUY_SDATE','BUY_STATUS',[sequelize.fn('max', sequelize.col('BUY_PRICE')),'BUY_PRICE']],
    where: {
      PRODUCT_KEY: 1
      // BUY_BUYER_KEY = user

    }
})
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}

module.exports = { buyauction };

