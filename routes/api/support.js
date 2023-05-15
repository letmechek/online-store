const express = require("express");
const router = express.Router();
const SupportController = require("../../controllers/api/support");

router.post("/message", SupportController.sendMessage);

module.exports = router;
