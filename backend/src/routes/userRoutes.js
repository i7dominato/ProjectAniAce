const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  saveProgress,
  getProgress,
  getAllProgress,
} = require("../controllers/userController");

router.post("/progress", auth, saveProgress);
router.get("/progress/:animeId", auth, getProgress);
router.get("/all-progress", auth, getAllProgress);

module.exports = router;