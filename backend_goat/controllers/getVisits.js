const Visit = require("../models/Visit");
const getVisits = async (req, res) => {
  try {
    const visits = await Visit.find()
      .populate("fellowId", "name")
      .populate("familyId", "familyId name")
      .exec();

    res.status(200).json(visits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = getVisits;
