const Wrapper = require("../middleware/asyncWrapper");
const RoomModel = require("../model/RoomModel");

class RoomController {
  static store = async () => {
    const {room_id} = await RoomModel.create();
    return room_id;
  };

  static messages = async (room_id) => {
    const allMessages = await RoomModel.messages(room_id);
    return allMessages;
  }
}
module.exports = RoomController;
