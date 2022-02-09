const joi = require('joi');
const { Op } = require('sequelize');
const { User } = require('../models');

const isValid = (obj) => {
  const schema = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().required().length(6),
  }).validate(obj);

  return schema;
};

const validateLogin = async (req, res, next) => {
  const valid = isValid(req.body);
  if (valid.error) return res.status(400).json({ message: valid.error.message });
  const user = await User.findOne({
    where: {
      email: {
        [Op.like]: req.body.email,
      },
    },
  });
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = validateLogin;