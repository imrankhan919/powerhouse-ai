const express = require("express");
const {
  registerUser,
  loginUser,
  privateController,
} = require("../../controllers/user/userController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

// Register User
// EndPoint : /api/user/register
// Method : POST
// Access : Public
router.post("/register", registerUser);

// Login User
// EndPoint : /api/user/login
// Method : POST
// Access : Public
router.post("/login", loginUser);

// Private Route
// EndPoint : /api/user/private
// Method : POST
// Access : Private
router.post("/private", protect, privateController);

module.exports = router;
