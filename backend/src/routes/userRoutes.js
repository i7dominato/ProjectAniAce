const router = require("express").Router();
const auth = require("../middleware/auth");

const { toggleFavorite, saveProgress } = require("../controllers/userController");

router.post("/favorite/:id", auth, toggleFavorite);
router.post("/progress", auth, saveProgress);

module.exports = router;