const Family = require("../models/Family");

const createFamily = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new Family document
    const newFamily = new Family({
      name,
    });

    // Save the new Family document to the database
    const savedFamily = await newFamily.save();

    // Send the saved Family document as the response
    res.status(201).json(savedFamily);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = createFamily;