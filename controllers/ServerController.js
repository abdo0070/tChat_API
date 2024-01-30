const { Server } = require("socket.io");
const io = new Server(server);
const users = new Set();


io.on("connection", (socket) => {
    console.log("user connected", socket.id);
    users.add(socket.id);
    io.emit("user count", users.size);
    socket.on("message", (data) => {
      io.emit("chat message", data);
    });
    socket.on("disconnect", () => {
      users.delete(socket.id);
      io.emit("user count", users.size);
    });
  });