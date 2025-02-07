const express = require("express");
const { generatePlan } = require("../../controllers/ai/aiController");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/generate-plan", protect, generatePlan);

module.exports = router;
