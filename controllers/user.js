import User from '../models/user';

exports.postUsers = (req, res) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save((err) => {
    if (err)
      return res.send(err);
    res.json({ message: 'New user added' });
  });
};

exports.getUsers = (req, res) => {
  User.find((err, users) => {
    if (err)
      return res.send(err);
    res.json(users);
  });
};
