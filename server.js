const http = require("http");

const server = http.createServer((req, res) => {
  console.log("srinath");
});

server.listen(4000, () => {});
