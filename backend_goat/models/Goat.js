const mongoose = require("mongoose");

// Define the schema for the posts document
const goatSchema = new mongoose.Schema(
  {
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goat",
      },
    ],
    familyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
    },
    vaccination: {
      type: String,
    },
    desease: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// Create and export the model
const Goat = mongoose.model("Goat", goatSchema);
module.exports = Goat;
