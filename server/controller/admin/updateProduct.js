const { Product } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function updateProduct(req, res, next) {
    const sendProductKey = req.body.sendProductKey;
    const brandStatus= req.body.brandStatus;
    const categoryStatus= req.body.categoryStatus;
    const newProductName=req.body.newProductName;
    const newProductMnum=req.body.newProductMnum;
    const newProductLdate=req.body.newProductLdate;
    const newProductPic=req.body.newProductPic;
    const newProductDesc=req.body.newProductDesc;
    const newProductOriprice= req.body.newProductOriprice;

    console.log( sendProductKey, brandStatus, categoryStatus, newProductName, newProductMnum, newProductLdate, newProductPic, newProductDesc, newProductOriprice )

      await Product.update(
            {
                PRODUCT_NAME: newProductName,
                PRODUCT_WDATE: Sequelize.fn('NOW'),
                PRODUCT_MNUM: newProductMnum,
                PRODUCT_CATE: categoryStatus,
                PRODUCT_BRAND: brandStatus,
                PRODUCT_LDATE: newProductLdate,
                PRODUCT_PIC: newProductPic,
                PRODUCT_DESC: newProductDesc,
                PRODUCT_ORIPRICE: newProductOriprice
            }, {
                where: {
                    PRODUCT_KEY: sendProductKey,
                }
            }
        )
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => console.log(err));
}

module.exports = { updateProduct };
