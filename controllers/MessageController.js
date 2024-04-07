const Wrapper = require("../middleware/asyncWrapper");
const MessageModel = require("../model/MessageModel");
const RoomController = require("./RoomController");

class MessageController {
  static addMessage = async (data) => {
    // Send The Incoming message .
    // create the Server Controller .
    console.log(data);
    const { message, room_id , user_id} = data;
    const newMessage = await MessageModel.create(message,room_id,user_id);
    return newMessage;
  };

  static broadcastMessage = async () => {
    // socket.io code here
  };

  static loadMessages = Wrapper(async(req,res,next) => {
    const {room_id} = req.params;
    if(room_id === 0){
      return res.json([]);
    }
    const messages = await RoomController.messages(room_id)
    res.json(messages)
  });
}

module.exports = MessageController;
