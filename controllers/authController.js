const client = require("../db");
const { v4: uuidv4 } = require("uuid");
const RequestError = require("../utils/RequestError");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/tokenOperations");
const {
  incryptPassword,
  isValidPassword,
} = require("../utils/validatePassword");

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
  const user = await client.query(checkQuery).rows[0];

  console.log("EMAIL CHECK", user);
  // "Already in use check"
  if (user) {
    throw RequestError(409, "This email is already in use");
  }
  const userId = uuidv4();

  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  const incryptedPassword = await incryptPassword(password);

  const registrationResponse = await client.query(
    `
  insert into profiles (${insertParsedAttributes})
  values ($1, $2, $3, $4)
    `,
    [userId, reqEmail, incryptedPassword, refreshToken]
  );

  console.log("REG RESP - ", registrationResponse);

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
  const { email: reqEmail, password } = req.body;

  const checkQuery = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [reqEmail],
  };
  const user = (await client.query(checkQuery)).rows[0];

  console.log("USER RESP FROM LOGIN - ", user);

  if (!user) {
    throw RequestError(401, "User with this email not found");
  }

  if (!(await isValidPassword(password, user.password))) {
    throw RequestError(401, "Wrong password");
  }

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return res.status(200).json({
    success: true,
    data: {
      id: user.id,
      accessToken,
      refreshToken,
    },
  });
};

module.exports = { registration, login };
