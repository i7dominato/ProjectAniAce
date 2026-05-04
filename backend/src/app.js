const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const animeRoutes = require("./routes/animeRoutes");
const episodeRoutes = require("./routes/episodeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/episodes", episodeRoutes);

app.use("/auth", authRoutes);
app.use("/animes", animeRoutes);
app.use("/uploads", express.static("uploads"));

module.exports = app;