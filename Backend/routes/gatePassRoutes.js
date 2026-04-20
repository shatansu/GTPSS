const express = require("express");
const router = express.Router();

const {
  applyPass,
  getAllPasses,
  updatePassStatus
} = require("../controllers/gatePassController");

// Routes
router.post("/apply", applyPass);
router.get("/all", getAllPasses);
router.put("/update/:id", updatePassStatus);

module.exports = router;