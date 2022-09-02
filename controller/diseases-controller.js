const Diseases = require("../model/story");

const getAlldiseases = async (req, res) => {
   let diseases;
   try {
      diseases = await Diseases?.find();
      return res.status(200).json({ diseases });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};
exports.getAlldiseases = getAlldiseases;

const postDiseases = async (req, res) => {
   const { title, description, symptoms } = req.body;

   try {
      const newStory = new Diseases({
         title: title,
         description: description,
         symptoms: symptoms,
      });
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
};

exports.postDiseasess = postDiseases;

const deleteDiseases = async (req, res) => {
   const { id } = req.params;
   try {
      const found = Diseases.findById(id);
      if (!found) {
         return res.status(404).json({ message: "Invalid Id" });
      } else {
         try {
            const deleted = Diseases.findByIdAndDelete(id);
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

exports.deleteDiseases = deleteDiseases;
