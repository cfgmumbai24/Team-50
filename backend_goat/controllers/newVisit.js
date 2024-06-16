const Fellow = require("../models/Fellow");
const Visit = require("../models/Visit");

const newVisit = async (req, res) => {
  try {
    const { fellowId,date } = req.body;

    // Find the fellow document
    const fellow = await Fellow.findById(fellowId);

    if (!fellow) {
      return res.status(404).json({ error: "Fellow not found" });
    }

    // Create a new visit document
    const newVisit = new Visit({
      date,
      fellowId: fellow._id,
    });

    // Save the new visit document
    const savedVisit = await newVisit.save();

    // Add the new visit to the fellow's visits array
    fellow.visits.push(savedVisit._id);

    // Save the updated fellow document
    const updatedFellow = await fellow.save();

    res.status(201).json(savedVisit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = newVisit;
