const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/adminRoutes");
const shopROutes = require("./routes/shopRoutes");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopROutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);
