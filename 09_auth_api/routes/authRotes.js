const express = require("express");
const { registration, login } = require("../controllers/authController");
const asyncWrapper = require("../middleware/asyncWrapper");
const validateBody = require("../middleware/validateBody");
const { registerSchema, loginSchema } = require("../utils/validateSchemas");
// const validateBody = require("../middleware/validateBody");
// const { schema } = require("../utils/validationSchemas");

const router = express.Router();

// Registration
router.post(
  "/sign-up",
  validateBody(registerSchema),
  asyncWrapper(registration)
);

// Login
router.post("/sign-in", validateBody(loginSchema), asyncWrapper(login));

module.exports = router;
