const Episode = require("../models/Episode");

exports.createEpisode = async (req, res) => {
  try {
    const video = req.files.video[0].filename;

    const episode = await Episode.create({
      title: req.body.title,
      number: req.body.number,
      anime: req.body.animeId,
      videoUrl: `/uploads/${video}`
    });

    res.json(episode);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar episódio" });
  }
};

exports.getEpisodesByAnime = async (req, res) => {
  const episodes = await Episode.find({
    anime: req.params.animeId
  }).sort({ number: 1 });

  res.json(episodes);
};