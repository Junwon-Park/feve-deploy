const express = require('express');
const router = express.Router();
const {
  loginValidator,
  signupValidator
} = require('../../middleware/validator.js');

const { auth } = require('../../controller/auth/auth.js');
const { login } = require('../../controller/auth/login.js');
const { logout } = require('../../controller/auth/logout.js');
const { signup } = require('../../controller/auth/signup.js');
const { findPassword } = require('../../controller/auth/findPassword.js');
const { checkId } = require('../../controller/auth/checkUserId.js');
const { googleOauth } = require('../../controller/auth/oauth.js');

router.get('/checktoken', auth);
router.post('/login', loginValidator, login);
router.get('/logout', logout);
router.post('/signup', signupValidator, signup);
router.post('/findpassword', findPassword);
router.post('/checkuserid', checkId);
router.post('/google', googleOauth);

module.exports = router;
