const express = require("express");
const router = express.Router();
const {
  createEmergency,
  getAllEmergencies,
  resolveEmergency,
} = require("../controllers/emergencyController");

const { protect } = require("../middleware/authMiddleware");

// Student
router.post("/", protect, createEmergency);

// Admin
router.get("/", protect, getAllEmergencies);
router.put("/:id/resolve", protect, resolveEmergency);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Emergency API working 🚨" });
});

module.exports = router;
