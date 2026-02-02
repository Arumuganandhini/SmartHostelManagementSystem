const Message = require("../models/Message");

// SEND MESSAGE (Admin / Warden)
exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;

    const message = await Message.create({
      sender: req.user.id,
      receiver: receiverId,
      content,
    });

    res.status(201).json({ message: "Message sent ✅", data: message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY MESSAGES (Student / Admin)
exports.getMyMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      receiver: req.user.id,
    })
      .populate("sender", "name role")
      .sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
