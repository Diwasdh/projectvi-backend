const express = require("express");
const router = express.Router();
const {
   getAlldiseases,
   postDiseasess,
   deleteDiseases,
} = require("../../controller/diseases-controller");

router.get("/", getAlldiseases);
router.post("/", postDiseasess);
router.delete("/:id", deleteDiseases);

module.exports = router;
