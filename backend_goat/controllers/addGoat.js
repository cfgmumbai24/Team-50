const Goat = require("../models/Goat")
const addGoat = async (req, res) => {
  try {
    const { height, weight, gender, vaccination, desease } = req.body;

    // Create a new Goat document
    const newGoat = new Goat({
      height,
      weight,
      gender,
      vaccination,
      desease,
    });

    // Save the new Goat document
    const savedGoat = await newGoat.save();

    res.status(201).json(savedGoat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = addGoat;