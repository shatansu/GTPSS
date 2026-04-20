const mongoose = require("mongoose");

const gatePassSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  outTime: {
    type: Date,
    required: true
  },
  inTime: {
    type: Date
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("GatePass", gatePassSchema);