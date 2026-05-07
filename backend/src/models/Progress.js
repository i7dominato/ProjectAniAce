const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  user: String,
  animeId: String,
  episodeId: String,
  time: Number,
});

module.exports = mongoose.model("Progress", ProgressSchema);