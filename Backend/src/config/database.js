const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "ebECg3B2bA6bahCFh2fhbe2BBbhE6ggc",
  database: "railway",
  port: 58915,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
