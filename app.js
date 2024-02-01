const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const server = http.createServer(app);
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./middleware/corsOptions");

function start() {
  app.use([
    credentials,
    cors(corsOptions),
    cookieParser(),
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
