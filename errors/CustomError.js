class costum_error extends Error {
  constructor(msg, statusCodec) {
    new Error(msg);
    this.statusCode = statusCode;
  }
}
const CostumError = (msg, statusCode) => {
  return new costum_error(msg, statusCode);
};

module.exports = CostumError;