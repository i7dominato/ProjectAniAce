const Anime = require("../models/Anime");

exports.createAnime = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch {
    res.status(500).json({ error: "Erro ao criar anime" });
  }
};

exports.getAnimes = async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
};

exports.uploadAnime = async (req, res) => {
  try {
    const video = req.files.video[0].filename;
    const thumb = req.files.thumbnail[0].filename;

    const anime = await Anime.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      videoUrl: `/uploads/${video}`,
      thumbnail: `/uploads/${thumb}`
    });

    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: "Erro no upload" });
  }
};