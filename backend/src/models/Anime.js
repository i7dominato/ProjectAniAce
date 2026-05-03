const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  thumbnail: String,
  category: String
}, { timestamps: true });

module.exports = mongoose.model("Anime", animeSchema);