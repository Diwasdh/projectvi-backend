const User = require("../model/user");

const getAllUsers = async (req, res) => {
   let users;
   try {
      users = await User.find();
      return res.status(200).json({ users });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.getAllUsers = getAllUsers;

const getUser = async (req, res) => {
   const { id } = req.params;
   try {
      const user = await User.findById(id);
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.getUser = getUser;

const getDoctorOnly = async (req, res) => {
   try {
      const user = await User.findOne({ isDoctor: "fasle" });
      if (!user) {
         return res.status(404).json({ message: "NO Doctor Found" });
      }
      return res.status(200).json({ user });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.getDoctorOnly = getDoctorOnly;
