const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res) => {
  return res.send(
    "<form action='/product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button ty'>Add product</button></form>"
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  return res.send("<h1>Hello from express</h1>");
});

app.listen(4000);
