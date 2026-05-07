const Progress = require("../models/Progress");
const Anime = require("../models/Anime");

exports.saveProgress = async (req, res) => {
  try {
    const { animeId, episodeId, time } = req.body;

    const progress = await Progress.findOneAndUpdate(
      { user: req.user.id, animeId },
      { episodeId, time },
      { upsert: true, new: true }
    );

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: "Erro ao salvar progresso" });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user: req.user.id,
      animeId: req.params.animeId,
    });

    res.json(progress || {});
  } catch {
    res.status(500).json({ error: "Erro ao buscar progresso" });
  }
};

exports.getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });

const animeIds = progress.map(p => p.animeId);

const animes = await Anime.find({ _id: { $in: animeIds } });

const result = progress.map(p => {
  const anime = animes.find(a => a._id.toString() === p.animeId);

  return {
    ...p._doc,
    anime,
    duration: 1200
  };
});

    res.json(result);
  } catch {
    res.status(500).json({ error: "Erro ao buscar progresso" });
  }
};