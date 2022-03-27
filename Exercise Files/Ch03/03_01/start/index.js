const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const filename = "../../powder-day.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(filename);
  res.writeHead(200, {
    "content-Length": size,
    "Content-Type": "video/mp4",
  });
  createReadStream(filename).pipe(res);
}).listen(3000, () => console.log("server running - 3000"));
