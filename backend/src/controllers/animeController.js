const Anime = require("../models/Anime");

exports.create = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch {
    res.status(500).json({ error: "Erro ao criar anime" });
  }
};

exports.list = async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
};