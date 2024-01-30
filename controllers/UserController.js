const UserModel = require("../model/UserModel");
const gentrateJWT = require("../utils/gentrateJWT");

class UserController {
  static async all(req, res) {
    const user = await UserModel.all();
    res.json(user);
  }
  static async get(req, res) {
    const { id } = req.params;
    const user = await this.getUser(id);
    res.json(user);
  }
  static async store(req, res) {
    const token = await gentrateJWT({
      user_name: req.body.user_name,
      email: req.body.email,
      role: 0,
    });
    const data = {
      ...req.body,
      token,
    };
    const user = await UserModel.create(data);
    res.status(202).json(user);
  }
  static async updateToken(req, res) {
  }
  static async romove(req, res) {
    const { id } = req.params;
    try {
      const [result, fields] = await UserModel.delete(id);
      res.json(result); // Respond with the result, not 'res'
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getUser(id){
    let user = await UserModel.get(id);
    user = user[0];
    const data = {
      id: user.id,
      user_name: user.user_name,
      email: user.email,
      image: user.image,
    };
    return data;
  }
  static async getToken(id){
    let user = await UserModel.get(id);
    user = user[0];
    return user.token;
  }
}

module.exports = UserController;
