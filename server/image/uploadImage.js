const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer = require('multer');
const {upload} = require('./upload');

router.post('/', upload, (req, res) => {
    console.log(req.file);
    console.log(upload)
    const { body, file } = req;
    console.log(file);
});

module.exports = router;
