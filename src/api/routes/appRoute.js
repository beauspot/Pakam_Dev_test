const express = require("express");
const router = express.Router();
const  handleNotificationCtrl  = require("../controllers/notificationCtrl");

router.post("/notifications", handleNotificationCtrl);

module.exports = router;
