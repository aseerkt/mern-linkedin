import { body } from 'express-validator';
import { User } from '../models/User';

export const registerValidators = [
  body('fullName').notEmpty().withMessage('Full Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid Email Address')
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        return Promise.reject('E-mail already in use');
      }
      return;
    }),
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        return Promise.reject('Username already taken');
      }
      return;
    }),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be 6 or more characters long'),
];
