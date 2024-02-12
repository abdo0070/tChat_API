const pool = require("../db/connection");

class MessageModel {
  static create = async (message, room_id, user_id) => {
    const sqlQuery = `insert into messages values(null,"${user_id}","${room_id}","${message}",null,null)`;
    const [result, fields] = await pool.query(sqlQuery);
    return fields;
  };
}

module.exports = MessageModel;
