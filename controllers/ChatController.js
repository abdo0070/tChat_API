const Wrapper = require("../middleware/asyncWrapper");
const ChatModel = require("../model/ChatModel");
const RoomModel = require("../model/RoomModel");

class FreindContoller {
  static sendMessage = Wrapper(async (req, res, next) => {
    // message content , user_id , freind_id
  });

  static getChat = Wrapper(async (req, res, next) => {
    const {id} = res.payload;
    const {freind_id} = req.body;
    let roomID =  await ChatModel.CommonChat(id,freind_id);
    if(!roomID){
      // create room for this two users ...
    roomID = await RoomModel.create();  
    roomID = roomID.room_id;  
    await ChatModel.create(id,freind_id,roomID);
    await ChatModel.create(freind_id,id,roomID);
    }
    return res.json(roomID);    
  });

  static freindList = Wrapper(async (req, res, next) => {
    const {id} = res.payload;
    const freinds = await ChatModel.all(id);
    res.json(freinds);
  });
}

module.exports = FreindContoller;
