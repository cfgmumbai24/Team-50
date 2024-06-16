// models/User.js
const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  goats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goat",
    },
  ],
  fellowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fellow",
  },
  // Add other fields as needed: password (hashed), role, etc.
});

const Family = mongoose.model("Family", familySchema);
module.exports = Family;
