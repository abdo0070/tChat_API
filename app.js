const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const http = require("http");
const server = http.createServer(app);
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");

function start() {
  app.use([
    cors(),
    express.static("public"),
    express.urlencoded({ extended: true }),
    webRouter,
    apiRouter,
  ]);
  server.listen(9000, () => {
    console.log("server is listening");
  });
}

start();
