const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: [true, "Email cannot be empty"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please Enter a valid email"],
      lowercase: true,
   },
   password: {
      type: String,
      required: true,
      minlength: 6,
   },
   isDoctor: {
      type: String,
      required: true,
      default: "user",
   },
   nmcNumber: {
      type: String,
      required: false,
      default: null,
   },
   degree: {
      type: String,
      required: false,
      default: null,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User; //export the User model to be used in other files.
