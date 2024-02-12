const { io } = require("../app");
const MessageController = require("./MessageController");

class ServerController {
  static newConnection(socket) {
    console.log("a user connected" , socket.id);

    socket.on("message" , async (data) => {
      /**
       * save the message to the DB
       * broadcast the message 
       *  */ 
      const res = await MessageController.addMessage(data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected " + socket.id);
    });    
  }


  static joinRoom(socket){

  }

  static sendMessage(){
    console.log("Recived Message ..." , data);
  }
}

module.exports = ServerController