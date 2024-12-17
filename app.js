const express = require("express");
const app = express();
app.set("view engine", "ejs");
const path = require("path");

const upload = require("./config/multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/test", upload.single("avatar"), (req, res,next) => {
  console.log(res.file);
  res.send("file sent!");
});

app.listen(3000);
