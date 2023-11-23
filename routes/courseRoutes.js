// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getCoursePage);
router.get('/outline', courseController.getCourseOutline);
router.get('/chapters', courseController.getChapters);
router.get('/chapters/:chapterId', courseController.getChapterDetails);

module.exports = router;
