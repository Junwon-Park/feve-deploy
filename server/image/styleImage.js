
const express = require('express');
const router = express.Router();
const fs = require('fs');
const mime = require("mime");

router.get('/', async (req, res)=>{ 
    const filePath = "./image/style/" + req.query.imageName;
    const imgMime = mime.getType(filePath);

    fs.readFile(filePath, function(err, data) {
      if (err) return res.json({ err: err });
      res.writeHead(200, { "Content-Type": imgMime });
      res.end(data);
    });

})

module.exports = router;

 