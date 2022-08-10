const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const users = require("../../userData");

router.post("/login", (req, res) => {
   return res.json({
      token: "fake-token",
   });
});

module.exports = router;
