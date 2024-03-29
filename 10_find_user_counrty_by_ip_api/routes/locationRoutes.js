const express = require("express");

const asyncWrapper = require("../middlewares/asyncWrapper");
const { getUserLocation } = require("../controllers/locationController");
const validateIpAddress = require("../middlewares/validateBody");

const router = express.Router();

router.post("/", validateIpAddress, asyncWrapper(getUserLocation));

module.exports = router;
