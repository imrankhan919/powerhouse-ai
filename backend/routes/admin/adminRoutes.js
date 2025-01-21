const express = require("express");
const {
  getAllUsers,
  getAllPlans,
  updateUser,
  getUserPlan,
} = require("../../controllers/admin/adminController");
const adminProtect = require("../../middleware/adminProtect");

const router = express.Router();

router.get("/all-users", adminProtect, getAllUsers);
router.get("/all-plans", getAllPlans);
router.put("/update/:uid", updateUser);
router.get("/plan/:uid", getUserPlan);

module.exports = router;
