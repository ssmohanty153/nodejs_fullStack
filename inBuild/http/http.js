const http = require("http");

let port = 8080;

let server = http.createServer(function (req, res) {
  res.write("Hello my server is created");
  res.end();
});

server.listen(8080);