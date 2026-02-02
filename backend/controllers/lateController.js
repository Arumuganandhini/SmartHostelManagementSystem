const LateRequest = require("../models/LateRequest");

// Student creates request
exports.createLateRequest = async (req, res) => {
  try {
    const { type, reason, date, time } = req.body;

    const request = await LateRequest.create({
      student: req.user.id,
      type,
      reason,
      date,
      time,
    });

    res.status(201).json({
      message: "Late request submitted ✅",
      data: request,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin views all requests
exports.getAllLateRequests = async (req, res) => {
  try {
    const requests = await LateRequest.find()
      .populate("student", "name rollNo roomNo")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin approves / rejects
exports.updateLateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const request = await LateRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      message: "Request status updated ✅",
      data: request,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
