const jwt = require("jsonwebtoken");

const gentrateJWT = async(payload) => {
  const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY,{
    expiresIn: "5m"
  });
  return token;
};

module.exports = gentrateJWT;