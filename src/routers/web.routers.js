const express = require('express');
const StaffController = require("../controllers/staff.controller");
const router = express.Router();


router.get('/staffs/create',StaffController.getInsertStaff);
router.post('/staffs/create',StaffController.insertStaff);
router.get('/staffs/:id/delete',StaffController.deleteStaff);
router.get('/staffs/:id/update',StaffController.takeUpdate);
router.post('/staffs/:id/update',StaffController.updateStaff);
router.get('/staffs', StaffController.getPage)

module.exports = router