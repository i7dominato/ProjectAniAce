const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: String,
  episodeId: String,
  time: Number,
  duration: Number,
}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);