const getVisits = require("../controllers/getVisits");

const router = require("express").Router();

router.get("/allVisit", getVisits);

const Fellow = require("../models/Fellow");
const Family = require("../models/Family");
const Goat = require("../models/Goat");

// GET /api/fellows
router.get("/allfellows", async (req, res) => {
  try {
    const fellows = await Fellow.find()
      .populate({
        path: "visits",
        populate: {
          path: "familyId",
          model: "Family",
          select: "familyId name",
        },
      })
      .exec();

    res.status(200).json(fellows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/allgoats", async (req, res) => {
  try {
    const goats = await Goat.find();

    res.status(200).json(goats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/allfamilies", async (req, res) => {
  try {
    const families = await Family.find().populate("goats");

    res.status(200).json(families);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;