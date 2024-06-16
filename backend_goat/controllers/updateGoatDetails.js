const Goat = require("../models/Goat");
const updatedGoat = async (req, res) => {
  try {
    const { height, weight, gender, desease, goatId, vaccination } = req.body;

    // Find the goat document by goatId
    const goat = await Goat.findOne({ goatId });

    if (!goat) {
      return res.status(404).json({ error: "Goat not found" });
    }

    // Update the goat document with the new details
    goat.height = height;
    goat.weight = weight;
    goat.gender = gender;
    goat.desease = desease;
    goat.vaccination = vaccination;

    // Save the updated goat document
    const updatedGoat = await goat.save();

    res.status(200).json(updatedGoat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = updatedGoat;
