const UserModel = require("../model/UserModel");
const gentrateJWT = require("../utils/gentrateJWT");
const Wrapper = require("../middleware/asyncWrapper");

class UserController {
  static async all(req, res, next) {
    const user = await UserModel.all();
    res.json(user);
  }
  static get = Wrapper(async (req, res, next) => {
    const { id } = req.params;
    const user = await this.getUser(id);
    res.json(user);
  });

  static store = Wrapper(async (req, res, next) => {
    const user = await UserModel.create(req.body);
    res.status(202).json(user);
  });

  static getByUserName = Wrapper(async (req, res, next) => {
    const {user_name} = req.params;
    const users = await UserModel.getByUserName(user_name);
    res.json(users);
  });

  static getUser = async (id) => {
    let user = await UserModel.get(id);
    user = user[0];
    const data = {
      id: user.id,
      user_name: user.user_name,
      email: user.email,
      image: user.image,
    };
    return data;
  };

  static getToken = async (id) => {
    let user = await UserModel.get(id);
    user = user[0];
    return user.token;
  };
}
module.exports = UserController;
