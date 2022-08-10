var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/v1/api/status", (req, res) => {
   res.send("Status OK !");
});

//Routes
app.use("/v1/api/users", require("./routes/api/users"));
app.use("/v1/api/auth", require("./routes/api/auth"));

//App Listen
app.listen(process.env.PORT || 5000, function () {
   console.log(`Example app listening on port ${process.env.PORT || 5000}!`);
});
