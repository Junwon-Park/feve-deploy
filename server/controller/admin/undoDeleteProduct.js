const { Product } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function undoDeleteProduct(req, res, next) {
    const sendProductKey = req.body.sendProductKey;
    const sendMnum = req.body.sendMnum;

    console.log( sendProductKey, sendMnum )

    await Product.update(
        {
            PRODUCT_DELETE: '0',
        }, {
            where: {
                PRODUCT_KEY: sendProductKey,
                PRODUCT_MNUM: sendMnum
            }
        }
    )
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => console.log(err));
}

module.exports = { undoDeleteProduct };
