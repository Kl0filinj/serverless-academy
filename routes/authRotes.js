const express = require("express");
const { registration, login } = require("../controllers/userController");
const asyncWrapper = require("../middleware/asyncWrapper");
// const validateBody = require("../middleware/validateBody");
// const { schema } = require("../utils/validationSchemas");

const router = express.Router();

// Registration
router.get("/sign-up", asyncWrapper(registration));

// Login
router.post("/sign-in", asyncWrapper(login));

module.exports = router;
