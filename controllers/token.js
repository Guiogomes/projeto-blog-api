const jwt = require('jsonwebtoken');
// const { Users } = require('../models');
require('dotenv').config();

module.exports = (req, res) => {
  const { displayName } = req.body;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: displayName }, process.env.JWT_SECRET, jwtConfig);
  return res.status(201).json({ token });
};