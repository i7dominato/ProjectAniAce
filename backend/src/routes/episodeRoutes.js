const router = require("express").Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const admin = require("../middleware/admin");

const {
  createEpisode,
  getEpisodesByAnime
} = require("../controllers/episodeController");

router.post(
  "/",
  auth,
  admin,
  upload.fields([{ name: "video", maxCount: 1 }]),
  createEpisode
);

router.get("/:animeId", getEpisodesByAnime);

module.exports = router;