// controllers/contactUsController.js
const ContactUsModel = require('../models/contactUsModel');

exports.getContactUsPage = async (req, res) => {
  try {
    //const contactInfo = await ContactUsModel.getContactInfo();
    //res.status(200).json({ contactInfo });
    res.status(200).json({ contactInfo:"sample" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};