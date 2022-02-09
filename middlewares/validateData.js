const joi = require('joi');
// const { Op } = require('sequelize');
const { User } = require('../models');

const isValid = (obj) => {
  const schema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().required().length(6),
    image: joi.string(),              
  }).validate(obj);

  return schema;
};

const validateInfo = (req, res, next) => {
  const valid = isValid(req.body);
  if (valid.error) return res.status(400).json({ message: valid.error.message });
  next();
};

const validateUser = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user) return res.status(409).json({ message: 'User already registered' });
  await User.create(req.body);
  next();
};

module.exports = { validateInfo, validateUser };