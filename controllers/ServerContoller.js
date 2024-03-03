const { io } = require("../app");
const MessageController = require("./MessageController");

class ServerController {
  static newConnection(socket) {
    console.log("a user connected", socket.id);

    socket.on("JoinRoom", (room_id) => {
      socket.join(`${room_id}`);
    });
    socket.on("message", async (room_id,data) => {
      /*
       * save the message to the DB
       * broadcast the message
       */ 
      io.to(`${room_id}`).emit('newMessage',data);
      const res = await MessageController.addMessage(data);
    });
    socket.on("disconnect", () => {
      console.log("user disconnected " + socket.id);
    });
  }

  static joinRoom(socket) {}

  static sendMessage() {
    console.log("Recived Message ...", data);
  }
}

module.exports = ServerController;
