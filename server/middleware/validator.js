const { validationResult, body } = require('express-validator');

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array() });
};

const loginValidator = [
  body('USER_ID')
    .trim()
    .notEmpty()
    .isLength({ min: 8, max: 15 })
    .withMessage('username should be at least 8 ~ 12 characters'),
  body('USER_PASSWORD')
    .trim()
    .notEmpty()
    .isLength({ min: 10, max: 20 })
    .withMessage('password should be at least 10 ~ 20 characters'),
  validateResult
];
const signupValidator = [
  body('USER_ID')
    .trim()
    .notEmpty()
    .isLength({ min: 8, max: 12 })
    .withMessage('username should be at least 8 ~ 12 characters!!!'),
  body('USER_PASSWORD')
    .trim()
    .notEmpty()
    .isLength({ min: 10, max: 20 })
    .withMessage('password should be at least 10 ~ 20 characters!!!'),
  body('USER_NAME').trim().notEmpty(),
  body('USER_MAIL')
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage('Invalid email type'),
  body('USER_PHONE').trim().notEmpty().withMessage('Phone number is empty!!!'),
  body('USER_ADDRESS1').trim().notEmpty().withMessage('Address is empty!!!'),
  body('USER_ADDRESS2')
    .trim()
    .notEmpty()
    .withMessage('Address detail is empty!!!'),
  validateResult
];

module.exports = { loginValidator, signupValidator };
