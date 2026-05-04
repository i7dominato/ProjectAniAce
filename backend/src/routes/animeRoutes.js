const router = require("express").Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const admin = require("../middleware/admin");


const {
  createAnime,
  getAnimes,
  uploadAnime
} = require("../controllers/animeController");

router.post("/", auth, admin, createAnime);

router.get("/", getAnimes);

router.post(
  "/upload",
  auth,
  admin,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 }
  ]),
  uploadAnime
);

module.exports = router;