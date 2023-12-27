const express = require('express');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const { createUser, getUserByEmail, validateUser } = require('../models/UserModel');

router.post(
  '/register',
  [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
    check('name').not().isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }

      await createUser({ name, email, password });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/login',
  [
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await validateUser(email, password);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const secretKey = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMzY5MzU3MiwiaWF0IjoxNzAzNjkzNTcyfQ.mMkHVRIFmh7auWjk0xnuwp49OH3eKxhouQLzDNVJW-A';
      const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
        expiresIn: '1h', // Token expiration time
      });

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
