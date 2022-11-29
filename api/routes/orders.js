const express = require('express');
const router = express.Router();
const orderctrl = require('../controllers/orders.controller')

router.route("/create").post(orderctrl.addorders);
router.route("/update").post(orderctrl.updateorders);
router.route("/list").get(orderctrl.getallorders);
router.route("/search").get(orderctrl.search);
router.route("/delete").get(orderctrl.deleteorder);

module.exports = router;
