const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./middleware/corsOptions");
// init the socket server
const { Server } = require("socket.io");
const http = require("http");
const ServerController = require("./controllers/ServerContoller");
const MessageController = require("./controllers/MessageController");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

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
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("JoinRoom", (room_id) => {
      socket.join(`${room_id}`);
    });
    socket.on("message", async (room_id,data) => {
      console.log("New Message " + room_id);
      await MessageController.addMessage(data);
      io.to(`${room_id}`).emit('newMessage',data);
    });
    socket.on("disconnect", () => {
      console.log("user disconnected " + socket.id);
    });
  });
}

start();
