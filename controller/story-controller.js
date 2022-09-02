const Story = require("../model/story");
const User = require("../model/user");

const getAllStory = async (req, res) => {
   let stories;
   try {
      stories = await Story?.find();
      return res.status(200).json({ stories });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};
exports.getAllStory = getAllStory;

const postStory = async (req, res) => {
   const { userId, story } = req.body;
   try {
      const user = User.findById(userId);
      if (!user) {
         return res.status(401).json({ message: "Unauthorized Access" });
      } else {
         try {
            const newStory = new Story({
               userId: userId,
               text: story,
            });
         } catch (err) {
            return res.status(500).json({ message: err.message });
         }
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.postStory = postStory;

const deleteStory = async (req, res) => {
   const { id } = req.params;
   try {
      const found = Story.findById(id);
      if (!found) {
         return res.status(404).json({ message: "Invalid Id" });
      } else {
         try {
            const deleted = Story.findByIdAndDelete(storyId);
            if (deleted) {
               return res.status(200).json({ message: "Story Deleted" });
            }
         } catch (error) {
            return res.status(500).json({ message: err.message });
         }
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.deleteStory = deleteStory;
