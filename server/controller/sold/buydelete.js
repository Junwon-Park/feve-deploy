const { Buy } = require("../../models");
const { Product } = require("../../models");
const sequelize = require("sequelize");

async function buydelete(req, res, next)
{
   // const user = req.body.user_key;
   // const buykey - req.body_BUY_KEY
  await Buy.destroy({
    where: {BUY_KEY: 2}
  }).then(result =>{
    console.log(result);
    console.log(result.BUY_EDATE);
    res.send(result);
  })
  .catch(err => console.log(err));

}

module.exports = { buydelete };