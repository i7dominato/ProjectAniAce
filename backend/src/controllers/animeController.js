const Anime = require("../models/Anime");

exports.createAnime = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.json(anime);
  } catch {
    res.status(500).json({ error: "Erro ao criar anime" });
  }
};

exports.getAnimes = async (req, res) => {
  const anime = await Anime.find();
  res.json(animes);
};