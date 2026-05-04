const router = require("express").Router();
const auth = require("../middleware/auth");
const { createAnime, getAnimes } = require("../controllers/animeController");

router.post("/", auth, createAnime);
router.get("/", getAnimes);

module.exports = router;

const upload = require("../middleware/upload");

router.post(
  "/upload",
  auth,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 }
  ]),
  async (req, res) => {
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
  }
);