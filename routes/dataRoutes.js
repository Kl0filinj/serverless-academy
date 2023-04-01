const express = require("express");

const asyncWrapper = require("../middlewares/asyncWrapper");
const { putData, getData } = require("../controllers/dataController");

const router = express.Router();

router.get("/:collection", asyncWrapper(getData));

router.put("/:collection", asyncWrapper(putData));

module.exports = router;
