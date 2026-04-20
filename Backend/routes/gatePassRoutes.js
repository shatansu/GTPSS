const express = require("express");
const router = express.Router();
const { applyPass } = require("../controllers/gatePassController");

router.post("/apply", applyPass);

module.exports = router;