const db = require('../config/database');

const createUser = async (user) => {
  try {
    const result = await db.query('INSERT INTO users SET ?', user);
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, getUserByEmail };
