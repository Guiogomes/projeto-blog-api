const jwt = require('jsonwebtoken');
// const { Users } = require('../models');
require('dotenv').config();

module.exports = (req, res, next) => {
  const { email } = req.body;
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email } }, process.env.JWT_SECRET, jwtConfig);

  res.status(200).json({ token });

  next();
};