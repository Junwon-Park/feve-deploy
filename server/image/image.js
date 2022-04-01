
const express = require('express');
const router = express.Router();
const fs = require('fs');
const mime = require("mime");

router.get('/', async (req, res)=>{ 
    console.log("image.js requestURL: ");
    //const imgUrl = "http://localhost:3000/image/product/" ;
    //result = imgUrl+ req.body.imageName ;
    //result = imgUrl+ "product-lego1.jpg";
    // console.log("requst.imageName: ", req.body.imageName);

    const filePath = "./image/product/" + "apple-icon.png"; //req.body.imageName;    
    const imgMime = mime.getType(filePath);
    console.log("Content-Type: ", imgMime);

    fs.readFile(filePath, function(err, data) {
      if (err) return res.json({ err: err }); // Fail if the file can't be read.
      console.log("readFile.data: ", data);  
      res.writeHead(200, { "Content-Type": imgMime });
      res.end(data);
    });
})


module.exports = router;

 