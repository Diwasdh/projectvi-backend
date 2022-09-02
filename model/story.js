const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});
const Story = mongoose.model("Story", storySchema);

module.exports = Story;
