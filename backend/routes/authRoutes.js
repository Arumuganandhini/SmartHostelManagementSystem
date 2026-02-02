const express = require("express");
const router = express.Router();
const {
  register,
  login,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

// test
router.get("/test", (req, res) => {
  res.json({ message: "Auth API working ✅" });
});

module.exports = router;
