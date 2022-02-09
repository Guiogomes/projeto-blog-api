const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const findUser = await User.findOne({ where: { email: decoded.data.email } });
    if (!findUser) return res.status(401).json({ message: 'User not found' });

    req.authUser = findUser.id;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};