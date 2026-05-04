const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  title: String,
  number: Number,
  videoUrl: String,
  anime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Anime"
  }
}, { timestamps: true });

module.exports = mongoose.model("Episode", episodeSchema);