const mongoose = require("mongoose");

const diseasesSchema = mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   symptoms: [
      {
         message: { type: String, required: true },
      },
   ],
});

const Diseases = mongoose.model("diseases", diseasesSchema);

module.exports = Diseases;
