
const Family = require("../models/Family");
const Goat = require("../models/Goat");

// POST /families/:familyId/goats
const assignGoat = async (req, res) => {
  try {
    const { goatId, familyId } = req.body;

    // Find the goat and family documents
    const goat = await Goat.findById(goatId);
    const family = await Family.findById(familyId);

    // Check if the documents were found
    if (!goat) {
      return res.status(404).json({ error: "Goat not found" });
    }

    if (!family) {
      return res.status(404).json({ error: "Family not found" });
    }

    // Assign the family to the goat
    goat.familyId = familyId;
    const updatedGoat = await goat.save();

    // Add the goat to the family's goats array
    family.goats.push(goatId);
    const updatedFamily = await family.save();

    res.status(200).json({ goat: updatedGoat, family: updatedFamily });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = assignGoat;
