require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT || 5000;
const progressRoutes = require("./routes/progressRoutes");

connectDB();

app.use("/api/progress", progressRoutes);

app.listen(PORT, () => {
  console.log("Servidor rodando");
});