const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const animeRoutes = require("./routes/animeRoutes");
const episodeRoutes = require("./routes/episodeRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({origin: "*" }));
app.use(express.json());
app.use("/episodes", episodeRoutes);
app.use("/users", userRoutes);

app.use("/auth", authRoutes);
app.use("/animes", animeRoutes);
app.use("/uploads", express.static("uploads"));

module.exports = app;