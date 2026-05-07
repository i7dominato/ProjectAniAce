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

const Anime = require("../models/Anime");
const Progress = require("../models/Progress");

exports.getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });

    const result = await Promise.all(
      progress.map(async (p) => {
        const anime = await Anime.findById(p.animeId);

        return {
          ...p._doc,
          anime,
          duration: 1000, // pode ajustar depois
        };
      })
    );

    res.json(result);
  } catch {
    res.status(500).json({ error: "Erro ao buscar progresso" });
  }
};