const router = require('express').Router();
const timeslotController = require("./timeslot.controller");

// router.get('/:id',timeslotController.listTimeSlots);
router.get('/:id',timeslotController.getTimeSlot);
module.exports = router;