const client = require("../db");
const { v4: uuidv4 } = require("uuid");
const RequestError = require("../utils/RequestError");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenOperations");
const { incryptPassword } = require("../utils/validatePassword");

const userAttributes = [
  "id",
  "email",
  "password",
  "refreshToken",
  "created_at",
];

const insertParsedAttributes = userAttributes.slice(-1).join(", ");

const registration = async (req, res) => {
  const { email: reqEmail, password } = req.body;

  // Query for "already in use" check
  const checkQuery = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [reqEmail],
  };
  const result = await client.query(checkQuery);

  console.log("EMAIL CHECK", result);
  // "Already in use check"
  if (result.rows[0]) {
    throw RequestError(409, "This email is already in use");
  }
  const userId = uuidv4();

  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  const incryptedPassword = incryptPassword(password);

  const registrationResponse = await client.query(
    `
  insert into profiles (${insertParsedAttributes})
  values ($1, $2, $3, $4)
    `,
    [userId, reqEmail, incryptedPassword, refreshToken]
  );

  console.log("REG RESP", registrationResponse);

  return res.status(201).json({
    success: true,
    data: {
      id: userId,
      accessToken,
      refreshToken,
    },
  });
};

const login = async (req, res) => {
  return res.status(201).json({ message: "OK" });
};

module.exports = { registration, login };
