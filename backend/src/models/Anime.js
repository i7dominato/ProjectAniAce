const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  genre: String
}, { timestamps: true });

module.exports = mongoose.model("Anime", animeSchema);