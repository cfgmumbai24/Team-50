const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  date: { type: String, required: true },
  fellowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fellow",
    required: true,
  },
  familyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Family",
  },
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;
