const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const { getAllUsers, getUser, getDoctorOnly } = require("../../controller/user-controller");

//get all user
router.get("/", getAllUsers);
router.get("/doctors", getDoctorOnly);
router.get("/:id", getUser);

//get a user

// router.get("/:id", (req, res) => {
//    const found = users.some((user) => user.id === req.params.id);
//    if (found) {
//       res.json(users.filter((user) => user.id === req.params.id));
//    } else {
//       res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
//    }
// });

// //create a user
// router.post("/", (req, res) => {
//    const newUser = {
//       id: uuid.v4(),
//       name: req.body.name,
//       email: req.body.email,
//       age: req.body.age,
//       location: req.body.location,
//    };
//    if (!newUser.name || !newUser.email || !newUser.age || !newUser.location) {
//       return res.status(400).json({ msg: "Please include all fields" });
//    }
//    users.push(newUser);
//    res.json(users);
// });

// //update user
// router.put("/:id", (req, res) => {
//    const found = users.some((user) => user.id === req.params.id);
//    if (found) {
//       const updateUser = req.body;
//       users.forEach((user) => {
//          if (user.id === req.params.id) {
//             user.name = updateUser.name ? updateUser.name : user.name;
//             user.email = updateUser.email ? updateUser.email : user.email;
//             user.age = updateUser.age ? updateUser.age : user.age;
//             user.location = updateUser.location ? updateUser.location : user.location;
//             res.json({ msg: "User updated", user });
//          }
//       });
//    } else {
//       res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
//    }
// });

// //delete user
// router.delete("/:id", (req, res) => {
//    const found = users.some((user) => user.id === req.params.id);
//    if (found) {
//       res.json({ msg: "User deleted", users: users.filter((user) => user.id !== req.params.id) });
//    } else {
//       res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
//    }
// });

module.exports = router;
