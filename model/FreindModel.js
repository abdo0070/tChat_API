const pool = require("../db/connection.js");

class FreindModel {
  static async create(user_id, freind_id) {
    try {
      const sqlQuery = `insert into freinds values(${user_id},${freind_id})`;
      const [result, fields] = await pool.query(sqlQuery);
      return fields;
    } catch (error) {
      throw Error(error.message);
    }
  }
  static async all(user_id) {
    const sqlQuery = `
    select users.user_name ,freinds.freind_id, users.image , freinds.room_id
    from freinds , users
    where freinds.user_id = ${user_id} and freinds.freind_id = users.id`;
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

module.exports = FreindModel;