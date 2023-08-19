const fs = require("fs");

const requestHandler = async (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");

    try {
      const content = await fs.promises.readFile("message.txt", "utf8");
      res.write(`<body><p>${content}</p>`);
    } catch (err) {
      res.write(`<body><p>Error reading file</p>`);
    }

    res.write(
      `<form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  if (url === "/home") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/about") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body><h1>Welcome to about</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/node") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>Hello from my node.js server</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my node.js server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = { requestHandler };
