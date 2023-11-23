// controllers/aboutUsController.js
const AboutUsModel = require('../models/aboutUsModel');

exports.getAboutUsPage = async (req, res) => {
  try {
    // const aboutUsInfo = await AboutUsModel.getAboutUsInfo();
    // res.status(200).json({ aboutUsInfo });
    res.status(200).json({ aboutUsInfo : "sample"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};