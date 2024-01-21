const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  createUser,
  getUserByEmail,
  validateUser,
  searchCourses,
  getClasses,
  getClassessTutor,
} = require("../models/UserModel");

router.post("/auth/register", async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  const { name, email, password } = req.body;
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    await createUser(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/auth/login",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await validateUser(email, password);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const secretKey =
        "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMzY5MzU3MiwiaWF0IjoxNzAzNjkzNTcyfQ.mMkHVRIFmh7auWjk0xnuwp49OH3eKxhouQLzDNVJW-A";
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        secretKey,
        {
          expiresIn: "1h", // Token expiration time
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/search", async (req, res, next) => {
  try {
    // Get the search query parameter from the request
    const searchQuery = req?.query?.name;
    const searchResult = await searchCourses(searchQuery);
    if (searchResult.length > 0) {
      res.status(200).json({ data: searchResult });
    } else {
      res.status(404).json({ message: "Classes not found!" });
    }
  } catch (error) {
    console.error("Error executing search query:", error);
    next(error);
  }
});

router.get("/classes", async (req, res, next) => {
  try {
    // Get the search query parameter from the request
    const result = await getClasses();
    if (result.length > 0) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ message: "Classes not found!" });
    }
  } catch (error) {
    console.error("Error executing search query:", error);
    next(error);
  }
});

router.get("/classes/:id", async (req, res, next) => {
  try {
    // Get the class ID from the request parameters
    const id = req.params.id;

    // Get the search query parameter from the request
    const result = await getClassessTutor(id);
    if (result) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ message: "Classes not found!" });
    }
  } catch (error) {
    console.error("Error executing search query:", error);
    next(error);
  }
});

module.exports = router;
