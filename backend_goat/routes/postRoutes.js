const router = require("express").Router();
const Family = require("../models/Family");
const Fellow =require("../models/Fellow")
const createFamily = require("../controllers/createFamily");
const assignGoat = require("../controllers/assignGoat");
const newVisit = require("../controllers/newVisit");
const updatedGoat = require("../controllers/updateGoatDetails");
const newFellow = require("../controllers/newFellow");
const addGoat = require("../controllers/addGoat");

router.post("/createFamily", createFamily);
router.post("/assignGoats", assignGoat);
router.post("/newVisit", newVisit);
router.post("/updateGoat", updatedGoat);
router.post("/createFellow", newFellow);
router.post("/addGoat", addGoat);

router.post("/assignfamily", async (req, res) => {
  try {
    const { fellowId, familyId } = req.body;

    // Find the fellow and family documents
    const fellow = await Fellow.findById(fellowId);
    const family = await Family.findById(familyId);

    // Check if the documents were found
    if (!fellow) {
      return res.status(404).json({ error: "Fellow not found" });
    }

    if (!family) {
      return res.status(404).json({ error: "Family not found" });
    }

    // Check if the family is already assigned to the fellow
    if (fellow.families.includes(familyId)) {
      return res
        .status(400)
        .json({ error: "Family already assigned to this fellow" });
    }

    // Assign the family to the fellow
    fellow.families.push(familyId);
    const updatedFellow = await fellow.save();
    family.fellowId = fellowId;
    family.save();
    res.status(200).json(updatedFellow);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;