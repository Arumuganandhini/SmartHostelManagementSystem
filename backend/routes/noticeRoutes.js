const express = require("express");
const router = express.Router();
const {
  createNotice,
  getAllNotices,
  deleteNotice,
} = require("../controllers/noticeController");

const { protect } = require("../middleware/authMiddleware");

// Admin
router.post("/", protect, createNotice);
router.delete("/:id", protect, deleteNotice);

// All users
router.get("/", protect, getAllNotices);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Notice API working 📢" });
});

module.exports = router;
