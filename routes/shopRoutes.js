const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("<h1>Hello from express</h1>");
});

module.exports = router;
