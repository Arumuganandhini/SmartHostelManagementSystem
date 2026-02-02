const express = require("express");
const router = express.Router();
const {
  createComplaint,
  getAllComplaints,
  getMyComplaints,
  updateComplaintStatus,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");

// Student
router.post("/", protect, createComplaint);
router.get("/my", protect, getMyComplaints);

// Admin / Warden
router.get("/", protect, getAllComplaints);
router.put("/:id/status", protect, updateComplaintStatus);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Complaint API working ✅" });
});

module.exports = router;
