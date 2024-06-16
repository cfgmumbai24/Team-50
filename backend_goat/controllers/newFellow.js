const Fellow = require("../models/Fellow");
const newFellow = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new fellow document
    const newFellow = new Fellow({
      name,
    });

    // Save the new fellow document
    const savedFellow = await newFellow.save();

    res.status(201).json(savedFellow);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports=newFellow