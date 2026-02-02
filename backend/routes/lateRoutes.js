const express = require("express");
const router = express.Router();
const {
  createLateRequest,
  getAllLateRequests,
  updateLateRequestStatus,
} = require("../controllers/lateController");

const { protect } = require("../middleware/authMiddleware");

// Student
router.post("/", protect, createLateRequest);

// Admin
router.get("/", protect, getAllLateRequests);
router.put("/:id/status", protect, updateLateRequestStatus);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Late request API working ✅" });
});

module.exports = router;
