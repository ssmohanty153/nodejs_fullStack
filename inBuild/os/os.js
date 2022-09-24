const os = require("os");
const fs = require("fs");

let opt = os.platform();
let core = os.cpus().length + " core";
let arch = os.arch();
let out = `You are using ${opt} os of ${arch} bt width ${core} system.`;
// fs.writeFile("../file/read.txt",out,function(){
//     console.log("file is created");

// })
//appending is if file already exit the append the value in that particular file.
// fs.appendFile("../file/read.txt", out, function () {
//   console.log("file is append");
// });
//to read the file 8-bit Unicode Transformation Format used as "UTF-8".
// fs.readFile("../file/read.txt", "UTF-8", function (err, data) {
//   if (err) {
//     console.log("file not there");
//     throw err;
//   } else {
//     console.log("data inside the file is " + data);
//   }
// });

fs.unlink("../file/read.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("file is deleted");
  }
});
