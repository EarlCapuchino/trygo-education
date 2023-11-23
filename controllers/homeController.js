const NewsModel = require('../models/newsModel');
exports.getHomePage = async (req, res) => {
    try {
      //const news = await NewsModel.getAllNews();
      //res.status(200).json({ news });
      res.status(200).json({ news: "try me" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };