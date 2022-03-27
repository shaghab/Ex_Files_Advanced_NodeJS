const fs = require("fs");

const readStream = fs.createReadStream("../../powder-day.mp4");

readStream.on("data", (chunk) => {
  console.log("size: ", chunk.length);
});

readStream.on("end", () => {
  console.log("read stream finished");
});

readStream.on("error", (error) => {
  console.log("an error has occued");
  console.error(error);
});
