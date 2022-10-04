let express = require("express");
let app = express();
const fs = require("fs");
let dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("subhransu");
});



app.listen(port, (err) => {
  if (err) throw err;
  else {
    console.log(`Server is running on port ${port}`);
  }
});
