const path = require("path");

const webRouter = require("express").Router();

webRouter.route("/").get((req, res) => {
  const htmlPage = path.resolve("./public/index.html");
  res.sendFile(htmlPage);
});

// webRouter.route("/login").get((req, res) => {
//     const htmlPage = path.resolve("./public/login.html");
//     res.sendFile(htmlPage);
// });

module.exports = webRouter;
