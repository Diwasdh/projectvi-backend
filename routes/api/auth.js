const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const { register, login } = require("../../controller/auth-controller");

// router.post("/login", (req, res) => {
//    return res.json({
//       token: "fake-token",
//    });
// });
router.post("/register", register);
router.post("/login", login);

module.exports = router;
