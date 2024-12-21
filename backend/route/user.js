const express = require("express");
const { register, login } = require("../controller/user");
const router = express.Router();
router.post('/signup', register)
router.post('/signin', login)
module.exports = router;
