const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  return res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title'/><input type='number' name='size'/><button ty'>Add product</button></form>"
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
