const db = require("../config/database");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  console.log(user);
  const saltRounds = 10;
  const pass = await bcrypt.hash(user.password, saltRounds);
  try {
    const columns = Object.keys({ ...user, password: pass }).join(", ");
    const values = Object.values(user);
    const result = await db.query("INSERT INTO users SET ?", {
      ...user,
      password: pass,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const validateUser = async (email, password) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
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

const searchCourses = async (searchQuery) => {
  try {
    if (searchQuery) {
      const [results] = await db.query(
        "SELECT * FROM classes WHERE name LIKE ?",
        [`%${searchQuery}%`]
      );
      return results;
    } else {
      const [results] = await db.query("SELECT * FROM classes");
      return results;
    }
  } catch (error) {
    console.error("Error searching for courses:", error);
    throw error;
  }
};

const getClasses = async () => {
  try {
    const [results] = await db.query("SELECT * FROM classes");
    return results;
  } catch (error) {
    console.error("Error searching for courses:", error);
    throw error;
  }
};

const getClassessTutor = async (classId) => {
  try {
    // Fetch class details
    const [classes] = await db.query("SELECT * FROM classes WHERE id = ?", [
      classId,
    ]);

    // Search inside classes_tutors
    const tutors = [];

    if (classes.length > 0) {
      // Fetch tutors for the given class
      const [classes_tutors] = await db.query(
        "SELECT * FROM classes_tutors WHERE class_id = ?",
        [classId]
      );

      // Use a for...of loop instead of map for asynchronous operations
      for (const result of classes_tutors) {
        try {
          // Fetch user details for each tutor
          const [rows] = await db.query(
            "SELECT * FROM users LEFT JOIN tutor on users.id = tutor.user_id WHERE users.id = ?",
            [result.tutor_id]
          );

          if (rows.length > 0) {
            tutors.push({ ...rows[0], price: result.price });
          } else {
            console.warn(`Tutor with ID ${result.tutor_id} not found.`);
            // Handle the case when a tutor is not found, maybe log a warning and continue
          }
        } catch (err) {
          console.error(
            `Error searching for tutor with ID ${result.tutor_id}:`,
            err
          );
          // Handle the error for this specific tutor fetch
          // You might choose to continue with the next tutor or handle it differently based on your use case
        }
      }
    }
    // Prepare the final result
    const finalResult = {
      class: classes[0], // Assuming there's only one class, adjust as needed
      tutors: tutors,
    };
    return finalResult;
  } catch (error) {
    console.error("Error searching for courses:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  validateUser,
  searchCourses,
  getClasses,
  getClassessTutor,
};
