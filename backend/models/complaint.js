const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["food", "water", "electricity", "wifi", "cleanliness", "maintenance", "other"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    isAnonymous: {
      type: Boolean,
      default: false,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"],
      default: "pending",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
