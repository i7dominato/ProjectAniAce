const router = require("express").Router();
const auth = require("../middleware/auth");
const { createAnime, getAnimes } = require("../controllers/animeController");

router.post("/", auth, createAnime);
router.get("/", getAnimes);

module.exports = router;