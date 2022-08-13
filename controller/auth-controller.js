const User = require("../model/user");
const bcrypt = require("bcrypt");
// const initializepassport = require("../config/passport.config");
// const passport = require("passport");
// initializepassport(passport);

const register = async (req, res) => {
   const { name, email, password } = req.body;
   if (!name || !email || !password) {
      return res.status(422).json({ message: "Invalid Data" });
   }
   try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
         name: name,
         email: email,
         password: hashedPassword,
      });
      const user = await newUser.save();
      return res.status(201).json({ user });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};
exports.register = register;

const login = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(422).json({ message: "Invalid Data" });
   }
   try {
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(401).json({ message: "Invalid password" });
      }
      return res.status(200).json({ user });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};
exports.login = login;
