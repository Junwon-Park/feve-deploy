const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image/style')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})

const uploadStyle = multer({ storage: storage }).single("image");

module.exports={ uploadStyle }