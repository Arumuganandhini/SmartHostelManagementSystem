const Notice = require("../models/Notice");

// Admin creates notice
exports.createNotice = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const notice = await Notice.create({
      title,
      description,
      category,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Notice posted successfully 📢",
      data: notice,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all notices (Student / Parent / Admin)
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find()
      .sort({ createdAt: -1 })
      .populate("createdBy", "name role");

    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin deletes notice
exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
