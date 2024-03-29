const {verify} = require('jsonwebtoken');
const verifyJWT = async (req, res, next) => {
  let token = req.headers['Authorization'] || req.headers['authorization'] || "";
  try {
    token = token.split(" ")[1];
    console.log('Cookies: ', req.cookies)
    res.payload = await verify(token,process.env.JWT_SECRET_KEY);
    next();
  } catch (error) {
    return res.status(403).json({
      message : error.message,
      status : 403
    });
  }
};

module.exports = verifyJWT;
