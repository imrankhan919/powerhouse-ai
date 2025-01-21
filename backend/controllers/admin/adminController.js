const expressAsyncHandler = require("express-async-handler");
const User = require("../../models/users/userModel");
const Plan = require("../../models/plan/planModel");

const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find();

  if (!users) {
    res.status(404);
    throw new Error("No Users Found");
  } else {
    res.status(200).json(users);
  }
});

const getAllPlans = expressAsyncHandler(async (req, res) => {
  const plans = await Plan.find();

  if (!plans) {
    res.status(404);
    throw new Error("No Plans Found");
  } else {
    res.status(200).json(plans);
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  res.send("User Updated");
});

const getUserPlan = expressAsyncHandler(async (req, res) => {
  res.send("User Plan Here!!");
});

module.exports = { getAllUsers, getAllPlans, updateUser, getUserPlan };
