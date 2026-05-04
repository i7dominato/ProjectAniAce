const animeRoutes = require("./animeRoutes");

router.use("/animes", animeRoutes);

const episodeRoutes = require("./episodeRoutes");

router.use("/episodes", episodeRoutes);