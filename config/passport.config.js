const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/user");
const bcrypt = require("bcrypt");

function initialize(passport) {
   const authenticateUser = async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
         return done(null, false, { message: "No user found" });
      }
      try {
         if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
         } else {
            return done(null, false, { message: "Password incorrect" });
         }
      } catch (error) {
         return done(error);
      }
   };
   passport.use(
      new LocalStrategy({
         usernameField: "email",
      }),
      authenticateUser,
   );
   passport.serializeUser((user, done) => {
      done(null, user.id);
   });
   passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
         done(err, user);
      });
   });
}

module.exports = initialize;
