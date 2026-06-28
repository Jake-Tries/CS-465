const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save()
    .then(() => {
      const token = user.generateJwt();
      res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      if (!user.validPassword(req.body.password)) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token = user.generateJwt();

      res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  register,
  login
};