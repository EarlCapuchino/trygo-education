// routes/aboutUsRoutes.js
const express = require('express');
const router = express.Router();
const aboutUsController = require('../controllers/aboutUsController');

router.get('/', aboutUsController.getAboutUsPage);

module.exports = router;