const express = require("express");
const router = express.Router();

const { shortenLink, getShortLink } = require("../controllers/linkControllers");
const asyncWrapper = require("../middlewares/asyncWrapper");
const validateUrlAddress = require("../middlewares/validateBody");

router.post("/shorten", validateUrlAddress, asyncWrapper(shortenLink));

router.get("/:linkToken", asyncWrapper(getShortLink));

module.exports = router;
