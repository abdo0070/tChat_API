const { verify } = require("jsonwebtoken");
const Wrapper = require("../middleware/asyncWrapper");
const FreindModel = require("../model/FreindModel");

class FreindContoller {
  static sendMessage = Wrapper(async (req, res, next) => {
    // message content , user_id , freind_id
  });

  static addFreind = Wrapper(async (req, res, next) => {
    const result = await FreindModel.create(
      req.body.user_id,
      req.body.freind_id
    );
    return res.json({
      msg: "created succes",
    });
  });

  static freindList = Wrapper(async (req, res, next) => {
    const {id} = res.payload;
    const freinds = await FreindModel.all(id);
    res.json(freinds);
  });
}

module.exports = FreindContoller;
