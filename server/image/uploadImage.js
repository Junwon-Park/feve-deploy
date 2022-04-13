const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer = require('multer');
const {upload} = require('./upload');

router.post('/', upload, (req, res) => {
    console.log("req.file:::::",req.files);
    console.log(upload)
    const { body, files } = req;
    console.log("req.files:::::",files);
});

module.exports = router;
