// const client = require("../db");
// const { v4: uuidv4 } = require("uuid");
// const RequestError = require("../utils/requestError");

const registration = async (req, res) => {
  return res.status(200).json({ message: "OK" });
};

const login = async (req, res) => {
  return res.status(201).json({ message: "OK" });
};

module.exports = { registration, login };
