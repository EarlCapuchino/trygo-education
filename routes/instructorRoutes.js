// routes/instructorRoutes.js
const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.getInstructorPage);
router.get('/:instructorId/courses', instructorController.getInstructorCourses);
router.get('/:instructorId', instructorController.getInstructorDetails);

module.exports = router;
