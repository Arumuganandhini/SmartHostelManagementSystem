const Emergency = require("../models/Emergency");

// STUDENT → trigger emergency
exports.createEmergency = async (req, res) => {
  try {
    const emergency = await Emergency.create({
      student: req.user.id,
    });

    res.status(201).json({
      message: "Emergency alert sent 🚨",
      data: emergency,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN → view all emergencies
exports.getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find()
      .populate("student", "name rollNo roomNo")
      .sort({ createdAt: -1 });

    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN → resolve emergency
exports.resolveEmergency = async (req, res) => {
  try {
    const emergency = await Emergency.findByIdAndUpdate(
      req.params.id,
      { status: "resolved" },
      { new: true }
    );

    res.json({
      message: "Emergency resolved ✅",
      data: emergency,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
