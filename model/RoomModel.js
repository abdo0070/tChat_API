const pool = require("../db/connection");

class RoomModel {
  static create = async () => {
    const sqlQuery = "INSERT INTO `rooms`(`id`) VALUES ('null')";
    await pool.query(sqlQuery);
    const [result, fields] = await pool.query(
      "SELECT MAX(id) as room_id FROM rooms"
    );
    return result[0].room_id;
  };

  static messages = async (room_id) => {
    const sqlQuery = `select users.user_name ,users.image , messages.content , messages.send_at 
    from rooms ,users , messages
    where messages.room_id = ${room_id} and rooms.id = ${room_id} and messages.user_id = users.id;`;
    const [result, fields] = await pool.query(sqlQuery);
    return result;
  };
}

module.exports = RoomModel;
