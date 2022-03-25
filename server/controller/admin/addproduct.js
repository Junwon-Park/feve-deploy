const Product = require("../../models").Product;

async function addproduct(req, res, next) {
    const product_name= req.body.product_name;
    const product_brand= req.body.product_brand;
    const product_mnum= req.body.product_mnum;
    const product_cate=req.body.product_cate;
    const product_ldate= req.body.product_ldate;
    //const product_pic=req.body.product_pic;
    const product_oriprice= req.body.product_oriprice;
    const product_desc=req.body.product_desc;
    const  product_wdate= req.body.product_wdate;

    console.log("콘솔:::::",product_name, product_brand, product_mnum, product_cate, product_ldate, product_oriprice,product_desc, product_wdate );
    console.log(Product);
    await Product.create({
        product_name: product_name,
        product_brand: product_brand,
        product_mnum: product_mnum,
        product_cate: product_cate,
        product_ldate: product_ldate,
        //product_pic: req.body.product_pic,
        product_oriprice: product_oriprice,
        product_desc: product_desc,
        product_wdate: product_wdate
    })
        .then(result => {
            console.log(result);
            //res.send(product_name, product_brand, product_mnum, product_cate, product_ldate, product_oriprice,product_desc, product_wdate );

        })
        .catch(err => console.log(err));
}

module.exports = { addproduct };