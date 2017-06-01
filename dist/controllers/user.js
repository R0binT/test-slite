'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.postUsers = function (req, res) {
  var user = new _user2.default({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function (err) {
    if (err) return res.send(err);
    res.json({ message: 'New user added' });
  });
};

exports.getUsers = function (req, res) {
  _user2.default.find(function (err, users) {
    if (err) return res.send(err);
    res.json(users);
  });
};
//# sourceMappingURL=user.js.map