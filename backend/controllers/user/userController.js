const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/users/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Check All Fields Are Coming
  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  // Check if phone numbers is valid
  if (phone.length !== 10) {
    res.status(400);
    throw new Error("Please Enter Valid Phone Number!!!");
  }

  // Check if user exist
  const emailExist = await User.findOne({ email: email });
  const phoneExist = await User.findOne({ phone: phone });
  if (emailExist || phoneExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  // Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Create User In Database
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (!user) {
    res.status(400);
    throw new Error("User Not Created!!");
  } else {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      admin: user.isAdmin,
      phone: user.phone,
      token: generateToken(user._id),
    });
  }
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check All Fields Are Coming
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  // Check is user exist
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      admin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

// Private Route
const privateController = async (req, res) => {
  res.json(req.user);
};

// Token Generation
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, privateController };
