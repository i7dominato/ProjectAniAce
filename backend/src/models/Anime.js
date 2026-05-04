const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: String,
  description: String,
  episodes: Number,
  thumbnail: String,
  videoUrl: String,
  genre: String
}, { timestamps: true });

module.exports = mongoose.model("Anime", animeSchema);