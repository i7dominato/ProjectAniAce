const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const animeRoutes = require("./routes/animeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/animes", animeRoutes);

module.exports = app;