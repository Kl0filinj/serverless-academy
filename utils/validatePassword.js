const bcrypt = require("bcrypt");

const isValidPassword = (password, newPassword) => {
  return bcrypt.compareSync(password, newPassword);
};

const incryptPassword = (newPassword) => {
  return bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8));
};

module.exports = { isValidPassword, incryptPassword };
