const { Sell } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;


async function sellauction(req, res, next) {
  // let user = req.body.USER_KEY; 
  await Sell.findOne({
    attributes: ['SELL_KEY','SELL_EDATE', 'SELL_SDATE',[sequelize.fn('min', sequelize.col('SELL_PRICE')),'SELL_PRICE']],
    where: {
      PRODUCT_KEY: 1,
      SELL_STATUS:0,

    }
})
    .then(result => {
        console.log(result);
        console.log(result.PRODUCT_KEY);
        res.json(result);
    })
    .catch(err => console.log(err));


}

module.exports = { sellauction };

