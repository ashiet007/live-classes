const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST || "sql12.freemysqlhosting.net",
  user: process.env.USER || "sql12678433",
  password: process.env.PASSWORD || "5ISxeDd8xF",
  database: process.env.DATABASE || "sql12678433",
  port: process.env.PORT || "3306",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
