const User = require("../models/User");

exports.toggleFavorite = async (req, res) => {
  const user = await User.findById(req.user.id);

  const animeId = req.params.id;

  if (user.favorites.includes(animeId)) {
    user.favorites = user.favorites.filter(id => id.toString() !== animeId);
  } else {
    user.favorites.push(animeId);
  }

  await user.save();

  res.json(user.favorites);
};

exports.saveProgress = async (req, res) => {
  const { episodeId, time } = req.body;

  const user = await User.findById(req.user.id);

  const existing = user.watchHistory.find(
    w => w.episodeId === episodeId
  );

  if (existing) {
    existing.time = time;
  } else {
    user.watchHistory.push({ episodeId, time });
  }

  await user.save();

  res.json({ success: true });
};