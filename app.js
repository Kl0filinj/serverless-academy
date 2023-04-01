const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRotes");
const userRoutes = require("./routes/userRoutes");
const { errorTemplate } = require("./utils/responseTemplate");

const app = express();

app.use(logger("short"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/me", userRoutes);

app.use((req, res) => {
  res.status(404).json(errorTemplate("Not found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(errorTemplate(message));
});

module.exports = app;
