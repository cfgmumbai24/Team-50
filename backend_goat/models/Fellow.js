const mongoose = require("mongoose");
const { Schema } = mongoose;

const fellowSchema = new Schema({
  name: { type: String, required: true },
  visits: [{ type: Schema.Types.ObjectId, ref: "Visit" }],
  families: [
    {
      type: Schema.Types.ObjectId,
      ref: "Family",
    },
  ],
});

const Fellow = mongoose.model("Fellow", fellowSchema);

module.exports = Fellow;
