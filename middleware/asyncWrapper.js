const errorHandler = require("./errorHandler");

const Wrapper = (cb) => {
  return async (req,res,next) => {
    try {
        await cb(req,res,next);
    } catch (error) {
        // const err = CostumError(error.msg,500);
        errorHandler(error,req,res,next);
    }
  };
};

module.exports = Wrapper;