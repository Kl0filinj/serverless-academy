const express = require("express");
const { current } = require("../controllers/userController");
const asyncWrapper = require("../middleware/asyncWrapper");
// const validateBody = require("../middleware/validateBody");
// const { schema } = require("../utils/validationSchemas");

const router = express.Router();

// Current user info
router.get("/", asyncWrapper(current));


module.exports = router;
