const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");

// 💾 salvar progresso
router.post("/", async (req, res) => {
  const { userId, episodeId, time, duration } = req.body;

  let progress = await Progress.findOne({ userId, episodeId });

  if (progress) {
    progress.time = time;
    progress.duration = duration;
  } else {
    progress = new Progress({ userId, episodeId, time, duration });
  }

  await progress.save();

  res.json(progress);
});

// 📥 pegar progresso do usuário
router.get("/:userId", async (req, res) => {
  const data = await Progress.find({ userId: req.params.userId });
  res.json(data);
});

module.exports = router;