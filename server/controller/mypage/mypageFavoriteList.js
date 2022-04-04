const sequelize = require('sequelize');
const Op = sequelize.Op;
const { Favorite } = require('../../models');
const { Product } = require('../../models');

async function getFavoriteList(req, res) {
    const userKey = req.body.USER_KEY;
    await Product.findAll({
        //브랜드
        //이름
        //사진
        //즉시구매가 : 판매테이블에서 희망판매가격 가져오면 된다. (우선 오리진)
        attributes:['PRODUCT_BRAND', 'PRODUCT_NAME', 'PRODUCT_PIC', 'PRODUCT_ORIPRICE'],
        
        include:[{
            model:Favorite,
            attributes: {exclude: ['FAVORITE_KEY', 'PRODUCT_KEY', 'USER_KEY']},
            where:{
                USER_KEY: userKey,
            },
        }]
    })
    .then((result) => {
        console.log("simpleFavorites has been responsed from db : ", result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = { getFavoriteList };
