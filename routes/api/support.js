const express = require("express");
const router = express.Router();
const SupportController = require("../../controllers/api/support");

router.post("/", SupportController.sendMessage);

module.exports = router;
