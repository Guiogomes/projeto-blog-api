const { Categories } = require('../models');

module.exports = async (req, res) => {
  const { name } = req.body;
  const category = await Categories.create({
    name,
  }, { fields: ['name'] });
  res.status(201).json({ id: category.id, name: category.name });
};