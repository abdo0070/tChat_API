const UserModel = require("../model/UserModel");
const gentrateJWT = require("../utils/gentrateJWT");
const UserController = require("./UserController");

class AuthController {
  static async login(req, res) {
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
      return res.json({
        status: "success",
        message: "Authentication successful",
        token: token
      });
    } else {
      res.status(401).json({
        error: "Unauthorized",
        message: "Invalid email or password",
      });
    }
  }
  static register() {
    /**
     * 1 - validate on the request body data
     * 2 - if the data is valid create user
     * 3 - return the user in the response
     */
  }
}

module.exports = AuthController;
