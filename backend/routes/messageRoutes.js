const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getMyMessages,
} = require("../controllers/messageController");

const { protect } = require("../middleware/authMiddleware");

// Admin / Warden send message
router.post("/", protect, sendMessage);

// Student / Admin view messages
router.get("/my", protect, getMyMessages);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Message API working ✅" });
});

module.exports = router;
