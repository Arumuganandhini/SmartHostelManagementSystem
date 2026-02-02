const Complaint = require("../models/complaint");

// CREATE COMPLAINT (Student)
exports.createComplaint = async (req, res) => {
  try {
    const { category, description, isAnonymous, priority } = req.body;

    const complaint = await Complaint.create({
      category,
      description,
      isAnonymous,
      priority,
      student: isAnonymous ? null : req.user.id, // hide student if anonymous
    });

    res.status(201).json({ message: "Complaint submitted successfully ✅", complaint });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL COMPLAINTS (Admin/Warden)
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("student", "name email rollNo roomNo");

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY COMPLAINTS (Student)
exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ student: req.user.id });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS (Admin/Warden)
exports.updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ message: "Complaint status updated ✅", complaint });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
