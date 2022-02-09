const joi = require('joi');
const { Categories } = require('../models');

const isValid = (obj) => {
  const schema = joi.object({
    name: joi.string().required(),  
  }).validate(obj);

  return schema;
};

const validateCategoryName = (req, res, next) => {
  const valid = isValid(req.body);
  if (valid.error) return res.status(400).json({ message: valid.error.message });
  next();
};

const validateIfCategoryExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const categories = await Categories.findAll({
    where: { id: categoryIds },
    raw: true,
  });
  if (categoryIds.length !== categories.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = { validateIfCategoryExist, validateCategoryName };