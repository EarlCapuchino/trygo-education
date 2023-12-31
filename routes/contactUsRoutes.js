// routes/contactUsRoutes.js
const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController');

router.get('/', contactUsController.getContactUsPage);

module.exports = router;
