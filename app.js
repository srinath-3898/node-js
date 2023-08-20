const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.use((req, res, next) => {
  console.log("hii");
  res.send("<h1>Hello from express</h1>");
});

app.listen(4000);
