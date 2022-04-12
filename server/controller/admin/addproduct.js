const { Product } = require("../../models");
const db = require("../../models");

async function addproduct(req, res, next) {
    const product_name= req.body.product_name;
    const product_brand= req.body.product_brand;
    const product_mnum= req.body.product_mnum;
    const product_cate=req.body.product_cate;
    const product_ldate= req.body.product_ldate;
    const product_pic=req.body.product_pic;
    const product_pic2=req.body.product_pic2;
    const product_pic3=req.body.product_pic3;
    const product_oriprice= req.body.product_oriprice;
    const product_desc=req.body.product_desc;
    const  product_wdate= req.body.product_wdate;

   // console.log("콘솔:::::",product_name, product_brand, product_mnum, product_cate, product_ldate, product_oriprice,product_desc, product_wdate );

    await Product.create({
        PRODUCT_NAME: product_name,
        PRODUCT_BRAND: product_brand,
        PRODUCT_MNUM: product_mnum,
        PRODUCT_LDATE: product_ldate,
        PRODUCT_PIC: req.body.product_pic,
        PRODUCT_PIC2: req.body.product_pic2,
        PRODUCT_PIC3: req.body.product_pic3,
        PRODUCT_ORIPRICE: product_oriprice,
        PRODUCT_DESC: product_desc,
        PRODUCT_WDATE: product_wdate,
        PRODUCT_CATE: product_cate
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { addproduct };