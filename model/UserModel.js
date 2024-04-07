const pool = require("../db/connection.js");

class UserModel {
  static async sql(sqlQuery) {
    const [row, fields] = await pool.query(sqlQuery);
    return row;
  }
  static async create(data) {
    validateData(data);
    const sqlQuery = `insert into users values(null,"${data.user_name}","${data.email}","${data.password}","${data.image}",null,null)`;
    const [result, fields] = await pool.query(sqlQuery);
    return fields;
  }
  static async get(id) {
    const sqlQuery = `select * from users where id = ${id}`;
    const [row, fields] = await pool.query(sqlQuery);
    return row;
  }
  static async all() {
    const sqlQuery = "select * from users";
    const [rows, fields] = await pool.query(sqlQuery);
    return rows;
  }
  static async updateToken(id, token) {
    const sqlQuery = `UPDATE users SET token = "${token}" WHERE id = ${id}`;
    const [result, fields] = await pool.query(sqlQuery);
    return result;
  }

  static async getByUserName(user_name){
    const sqlQuery = `
    select id as user_id , user_name , image
    from users
    where user_name like "%${user_name}%"`;
    const [row, fields] = await pool.query(sqlQuery);
    return row;
  }
}

const validateData = (data) => {
  if (
    data.user_name == undefined ||
    data.image == undefined ||
    data.email == undefined ||
    data.password == undefined
  ) {
    throw Error("Invalid data");
  }
};

module.exports = UserModel;
