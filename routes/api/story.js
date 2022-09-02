const express = require("express");
const router = express.Router();
const { getAllStory, deleteStory, postStory } = require("../../controller/story-controller");

router.get("/", getAllStory);
router.post("/", postStory);
router.delete("/:id", deleteStory);

module.exports = router;
