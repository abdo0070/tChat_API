const Wrapper = require("../middleware/asyncWrapper");
const MessageModel = require("../model/MessageModel");
const RoomController = require("./RoomController");

class MessageController {
  static addMessage = async (data) => {
    // Send The Incoming message .
    // create the Server Controller .
    const { message, room_id , user_id} = data;
    return await MessageModel.create(message,room_id,user_id);
  };

  static broadcastMessage = async () => {
    // socket.io code here
  };

  static loadMessages = Wrapper( async (req,res,next) => {
    const {room_id} = req.params;
    const messages = await RoomController.messages(room_id)
    res.json(messages)
  });
}

module.exports = MessageController;
