const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" },
  role: { type: String, enum: ["user", "admin"],default: "user"}
}, { timestamps: true });

favorites: [
  {
    type: require("mongoose").Schema.Types.ObjectId,
    ref: "Anime"
  }
]

watchHistory: [
  {
    episodeId: String,
    time: Number
  }
]

module.exports = mongoose.model("User", userSchema);