const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
     const fn = crypto.randomBytes(12,function (err, bytes) {
   const fn  =  bytes.toString("hex") + path.extname(file.originalname)
   cb(null, fn);
     })
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
