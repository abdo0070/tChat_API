const pool = require("../db/connection.js");

class ChatModel {
  static async create(user_id, room_id) {
    try {
      const sqlQuery = `insert into chats values(${user_id},${room_id})`;
      const [result, fields] = await pool.query(sqlQuery);
      return fields;
    } catch (error) {
      throw Error(error.message);
    }
  }
  static async all(user_id) {
    // get all chatRooms for specific user ...
    const sqlQuery = ` select r.id , c.name
    from rooms r , chats c , users u
    where u.id = ${user_id} and r.id = c.room_id and c.user_id = ${user_id}
    `;
    const [rows, fields] = await pool.query(sqlQuery);
    return rows;
  }
  static async checkIfFreind(user_id, freind_id) {
    const sqlQuery = `SELECT * from freinds where freinds.freind_id = ${freind_id} and freinds.user_id = ${user_id}`;
    const [row, fields] = await pool.query(sqlQuery);
    if (row.length > 0) {
      return true;
    }
    return false;
  }
}

module.exports = ChatModel;