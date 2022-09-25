const express = require("express");
const app = express();
//dotenv basically we are using for to configure production port inside the development
const dotenv = require("dotenv");
const morgan = require("morgan");
const fs = require("fs");

//we craeted .ent folder and add that PORT=6700 . Atfer that we config the dotent.config(); then we will able ti use that port
dotenv.config();
//by process.env.PORT we can able to get that port
let port = process.env.PORT || 8080;

//morgan i used to store the log ,
//we used stream to store the log in side the app.logs file
app.use(morgan("short", { stream: fs.createWriteStream("./app.logs") }));

//to call all the static file

app.use(express.static(__dirname + "/public"));

//html file path
app.set('views', './src/views');

//view engine
app.set('view engine', 'ejs');

//products routing
let categoryRoutes = require("./src/controller/categoryRoute");
let productsRouter = require("./src/controller/productsRoute");

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/category", categoryRoutes);
app.use("/products", productsRouter);
app.listen(port, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("app listen on port no " + port);
  }
});
