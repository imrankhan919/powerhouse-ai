const expressAsyncHandler = require("express-async-handler");
const Plan = require("../../models/plan/planModel");
const User = require("../../models/users/userModel");

const addPlan = expressAsyncHandler(async (req, res) => {
  const { height, weight, goal, prefrence } = req.body;

  if (!height || !weight || !goal || !prefrence) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  const plan = await Plan.create({
    user: req.user._id,
    height,
    weight,
    goal,
    prefrence,
  });

  if (plan) {
    res.status(201).json(plan);
  } else {
    res.status(400);
    throw new Error("Plan Not Created!!");
  }
});

const updatePlan = expressAsyncHandler(async (req, res) => {
  // Check if user Exist
  const user = await User.findById(req.params.id);

  if (user._id !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not Same User");
  }

  const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (updatedPlan) {
    res.status(201).json(updatedPlan);
  } else {
    res.status(400);
    throw new Error("Plan Not Updated!!");
  }
});

const getPlans = expressAsyncHandler(async (req, res) => {
  // Check if user Exist
  const user = await User.findById(req.params.uid);

  if (user._id.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not Same User");
  }

  const plans = await Plan.find({ user: user._id });
  if (plans) {
    res.status(201).json(plans);
  } else {
    res.status(404);
    throw new Error("No Plans Found!!");
  }
});

const getPlan = expressAsyncHandler(async (req, res) => {
  const plan = await Plan.findById(req.params.pid);
  if (plan) {
    res.status(201).json(plan);
  } else {
    res.status(404);
    throw new Error("No Plans Found!!");
  }
});

module.exports = { addPlan, updatePlan, getPlans, getPlan };
