const User = require('../models/userModel');

exports.getUserByUsernameAndPassword = async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(200).json({ message: 'Invalid Credentials' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
