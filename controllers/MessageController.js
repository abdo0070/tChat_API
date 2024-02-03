const Wrapper = require("../middleware/asyncWrapper");

class MessageController {
  static incomingMessage = Wrapper(async (req,res,next) => {
    // Send The Incoming message .
    // create the Server Controller .
    const {message,room_id} = req.body;
    const {id} = req.payload;
    
  });
  static sendMessage = async () => {
    // socket.io code here 
  } 
}
