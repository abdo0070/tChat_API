const pool = require("../db/connection");

class MessageModel {
  static create = async (message, room_id, user_id) => {
    const sqlQuery = `INSERT INTO messages (id, user_id, room_id, content, seen_at, send_at) VALUES (NULL, '${user_id}' , '${room_id}', '${message}', NULL, current_timestamp());`;
    const [result, fields] = await pool.query(sqlQuery);
    return result;    
  };
}

module.exports = MessageModel;
