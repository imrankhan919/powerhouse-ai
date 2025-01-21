const express = require("express");
const {
  addPlan,
  updatePlan,
  getPlans,
} = require("../../controllers/plan/planController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.get("/:uid", protect, getPlans);
router.post("/", protect, addPlan);
router.put("/:id", protect, updatePlan);

module.exports = router;
