var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

Promise.race([delay(1), delay(5), delay(10), delay(10)])
  .then(() => readdir(__dirname))
  .then(console.log);
