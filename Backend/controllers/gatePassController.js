const GatePass = require("../models/GatePass");

// Apply Gate Pass
exports.applyPass = async (req, res) => {
  try {
    const { reason, outTime, inTime } = req.body;

    const pass = new GatePass({
     student: "69e5f707da7ef72923d255c2", // baad me auth middleware se aayega
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