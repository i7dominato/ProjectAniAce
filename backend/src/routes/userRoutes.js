const router = require("express").Router();
const auth = require("../middleware/auth");

const { saveProgress, getProgress } = require("../controllers/userController");

router.post("/progress", auth, saveProgress);
router.get("/all-progress", auth, getAllProgress);
module.exports = router;