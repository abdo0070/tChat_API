const pool = require("../db/connection.js");

class ChatModel {
  static async create(user_id, freind_id,room_id) {
    try {
      const [r,f] = await pool.query(`select user_name as chatName from users where users.id = ${freind_id}`);
      const chatName = r[0].chatName;
      console.log(chatName);
      const sqlQuery = `INSERT INTO chats (user_id, freind_id,room_id, name) VALUES (${user_id},${freind_id},${room_id}, "${chatName}");`;
      const [result, fields] = await pool.query(sqlQuery);
      return fields;

    } catch (error) {
      console.log(error.message);
      throw Error(error.message);
    }
  }
  static async all(user_id) {
    // get all chatRooms for specific user ...
    const sqlQuery = ` select r.id , c.name , u.image
    from rooms r , chats c , users u
    where u.id = ${user_id} and r.id = c.room_id and c.user_id = ${user_id}
    `;
    const [rows, fields] = await pool.query(sqlQuery);
    return rows;
  }
  static async CommonChat(user_id, freind_id) {
    const sqlQuery = `select c.room_id from chats c where ${user_id} = c.user_id and ${freind_id} = c.freind_id`;
    const [row, fields] = await pool.query(sqlQuery);
    return row[0]?.room_id;
  }
}

module.exports = ChatModel;
