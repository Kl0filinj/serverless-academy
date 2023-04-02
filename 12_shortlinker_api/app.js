const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const linkRoutes = require("./routes/linkRoutes");

const app = express();

app.use(logger("short"));
app.use(cors());
app.use(express.json());

app.use("/", linkRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
