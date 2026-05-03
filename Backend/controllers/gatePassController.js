const GatePass = require("../models/GatePass");

// Apply Gate Pass
exports.applyPass = async (req, res) => {
  try {
    const { reason, outTime, inTime } = req.body;

    const pass = new GatePass({
     student: req.user.id, // baad me auth middleware se aayega
      reason,
      outTime,
      inTime
    });

    await pass.save();

    res.json({ msg: "Gate pass applied", pass });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all passes
exports.getAllPasses = async (req, res) => {
  try {
    const passes = await GatePass.find().populate("student", "name email");
    res.json(passes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update status
exports.updatePassStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const pass = await GatePass.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ msg: "Status updated", pass });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};