const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer = require('multer');
const {uploadStyle} = require('./uploadStyle');

router.post('/', uploadStyle, (req, res) => {
    console.log(req.file);
    console.log(uploadStyle)
    const { body, file } = req;
    console.log(file);
});

module.exports = router;
