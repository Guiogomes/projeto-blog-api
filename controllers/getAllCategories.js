const { Categories } = require('../models');

module.exports = async (_req, res) => {
  const categories = await Categories.findAll();
  return res.status(200).json(categories);
};