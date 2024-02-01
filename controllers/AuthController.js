const Wrapper = require("../middleware/asyncWrapper");
const UserModel = require("../model/UserModel");
const gentrateJWT = require("../utils/gentrateJWT");
const UserController = require("./UserController");

class AuthController {
  static login = Wrapper(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const result = await UserModel.sql(
      `select * from users where email = "${email}" and password = "${password}"`
    );
    if (result.length > 0) {
      // genrate the token and update the database
      const user = result[0];
      let token = await gentrateJWT({
        id: user.id,
        user_name: user.user_name,
        email: user.email,
        image: user.image,
      });
      await UserModel.updateToken(user.id, token);
      token = await UserController.getToken(user.id);
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000,
      });
      return res.json({
        status: "success",
        message: "Authentication successful",
        token: token,
      });
    } else {
      res.status(401).json({
        error: "Unauthorized",
        message: "Invalid email or password",
        data: {
          ...req.body,
        },
      });
    }
  });
  static register = Wrapper(async (req, res, next) => {
    // create user
    await UserModel.create(req.body);
    return res.status(201).json({
      message: "success",
    });
  });
}

module.exports = AuthController;
