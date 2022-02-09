const joi = require('joi');

const isValid = (obj) => {
  const schema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
  }).validate(obj);

  return schema;
};

module.exports = (req, res, next) => {
  const valid = isValid(req.body);
  if (valid.error) return res.status(400).json({ message: valid.error.message });
  next();
};