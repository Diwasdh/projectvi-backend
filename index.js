var express = require("express");
var app = express();
var mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/v1/api/status", (req, res) => {
   res.send("Status OK !");
});

//Routes
app.use("/v1/api/users", require("./routes/api/users"));
app.use("/v1/api/auth", require("./routes/api/auth"));

//mongoose.connect
mongoose
   .connect(
      "mongodb+srv://admin:wB3fovd6pfHLPces@cluster0.6ap2z34.mongodb.net/?retryWrites=true&w=majority",
   )
   .then(() => {
      //App Listen
      app.listen(process.env.PORT || 5000, function () {
         console.log(`app listening on port ${process.env.PORT || 5000} !`);
      });
   })
   .catch((err) => {
      console.log(err);
   });
