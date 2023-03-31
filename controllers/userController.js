// const RequestError = require("../utils/RequestError");

const getCurrentUser = async (req, res) => {
  const { email } = req.body;

  return res.status(200).json({ message: email });
};

module.exports = { getCurrentUser };
