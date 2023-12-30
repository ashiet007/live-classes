const db = require('../config/database');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
  console.log(user);
  try {
    const columns = Object.keys(user).join(', ');
    const values = Object.values(user);
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

const validateUser = async (email, password) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) {
      return null; // User not found
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null; // Invalid password
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const searchCourses = async(searchQuery) => {
  try {
    const [results] = await db.query('SELECT * FROM categories WHERE name LIKE ?', [`%${searchQuery}%`]);
    return results;
  } catch (error) {
    console.error('Error searching for courses:', error);
    throw error;
  }
}

module.exports = { createUser, getUserByEmail, validateUser, searchCourses };
