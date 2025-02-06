const express = require("express");
const {
  addPlan,
  updatePlan,
  getPlans,
  getPlan,
} = require("../../controllers/plan/planController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.get("/:uid", protect, getPlans);
router.get("/view/:pid", protect, getPlan);
router.post("/", protect, addPlan);
router.put("/:id", protect, updatePlan);

module.exports = router;
