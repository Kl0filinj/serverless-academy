const jwt = require("jsonwebtoken");

function generateAccessToken(userId) {
  const accessToken = jwt.sign(
    { id: userId },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_TTL,
    }
  );
  return accessToken;
}

function generateRefreshToken(userId) {
  const refreshToken = jwt.sign(
    { id: userId },
    process.env.REFRESH_TOKEN_SECRET
  );
  return refreshToken;
}

module.exports = { generateAccessToken, generateRefreshToken };
