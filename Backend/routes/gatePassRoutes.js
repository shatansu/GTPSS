const express = require("express");
const router = express.Router();

const {
  applyPass,
  getAllPasses,
  updatePassStatus
} = require("../controllers/gatePassController");

const auth = require("../middleware/authMiddleware");
const roleCheck = require("../middleware/roleMiddleware");

// Student apply
router.post("/apply", auth, roleCheck("student"), applyPass);

// HOD actions
router.get("/all", auth, roleCheck("hod"), getAllPasses);
router.put("/update/:id", auth, roleCheck("hod"), updatePassStatus);

module.exports = router;