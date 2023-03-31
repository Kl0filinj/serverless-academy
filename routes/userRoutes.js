const express = require("express");
const { getCurrentUser } = require("../controllers/userController");
const asyncWrapper = require("../middleware/asyncWrapper");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Current user info
router.get("/", authMiddleware, asyncWrapper(getCurrentUser));

module.exports = router;
