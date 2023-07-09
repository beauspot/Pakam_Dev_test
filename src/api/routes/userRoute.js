const express = require("express");
const router = express.Router();
const handleNotificationCtrl = require("../controllers/userCtrl");

router.post("/signup", handleNotificationCtrl);

module.exports = router;
