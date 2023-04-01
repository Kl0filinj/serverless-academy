const bcrypt = require("bcrypt");

const isValidPassword = async (password, newPassword) => {
  return await bcrypt.compare(password, newPassword);
};

const incryptPassword = async (newPassword) => {
  return await bcrypt.hash(newPassword, 8);
};

module.exports = { isValidPassword, incryptPassword };
