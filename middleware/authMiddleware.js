const jwt = require("jsonwebtoken");
const { errorTemplate } = require("../utils/responseTemplate");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [tokenType, token] = authorization.split(" ");

  try {
    if (tokenType !== "Bearer") {
      return res.status(401).json(errorTemplate("Token type error"));
    }

    if (!token) {
      return res.status(401).json(errorTemplate("Token is required"));
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(401).json(errorTemplate(err.message));
      }
      // if (err?.expiredAt) {
      //   const checkQuery = {
      //     text: "SELECT * FROM users WHERE id = $1",
      //     values: [user.id],
      //   };
      //   const result = await client.query(checkQuery);
      //   console.log("AUTH MIDDLEWARE USER LOG (FROM DB) - ", result.rows[0]);
      //   if (!result.rows[0] || result.rows[0].refreshToken) {
      //     return res.status(401).json({ message: "User or token not found" });
      //   }
      // }

      req.user = user.id;
      next();
    });
  } catch (error) {
    return res.status(401).json(errorTemplate("Token is invalid"));
  }
};

module.exports = {
  authMiddleware,
};
