const jwt = require("jsonwebtoken");
// const client = require("../db");
// const { User } = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [tokenType, token] = authorization.split(" ");

  try {
    if (tokenType !== "Bearer") {
      return res.status(401).json({ message: "Token type error" });
    }

    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }

    const { id } = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, user) => {
        console.log("USER IN AUTH MIDDLEWARE - ", user);
        if (err) {
          console.log("ERROR FROM AUTH MIDDLEWARE - ", err);
          console.log("ID FROM JWT.VERIFY - ", id);
          //   const checkQuery = {
          //     text: "SELECT * FROM users WHERE id = $1",
          //     values: [id],
          //   };
          //   const result = await client.query(checkQuery);
          //   console.log("AUTH MIDDLEWARE USER LOG (FROM DB) - ", result.rows[0]);

          //   if (!result.rows[0] || result.rows[0].refreshToken) {
          //     return res.status(401).json({ message: "User or token not found" });
          //   }
        }

        // req.user = user;
        next();
      }
    );

    // const user = await User.findById(_id);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Token is invalid", details: error });
  }
};

module.exports = {
  authMiddleware,
};
