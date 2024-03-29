const { verify } = require("jsonwebtoken");
const Wrapper = require("../middleware/asyncWrapper");
const FreindModel = require("../model/FreindModel");

class FreindContoller {
  static sendMessage = Wrapper(async (req, res, next) => {
    // message content , user_id , freind_id
  });

  static addFreind = Wrapper(async (req, res, next) => {
    const {id} = res.payload;
    const result = await FreindModel.create(3,9);
    return res.json({
      data : req.bod,
      msg: "created succes",
    });
  });

  static isFreind = async (user_id,freind_id) => {
    return FreindModel.checkIfFreind(user_id,freind_id);
  }

  static freindList = Wrapper(async (req, res, next) => {
    const {id} = res.payload;
    const freinds = await FreindModel.all(id);
    res.json(freinds);
  });
}

module.exports = FreindContoller;
