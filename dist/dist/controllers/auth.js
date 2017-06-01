'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportHttp = require('passport-http');

var _passportHttp2 = _interopRequireDefault(_passportHttp);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_passport2.default.use(new _passportHttp2.default.BasicStrategy(function (username, password, callback) {
  _user2.default.findOne({ username: username }, function (err, user) {
    if (err) return callback(err);

    if (!user) return callback(null, false);

    user.verifyPassword(password, function (err, isMatch) {
      if (err) return callback(err);

      if (!isMatch) return callback(null, false);

      return callback(null, user);
    });
  });
}));

exports.isAuthenticated = _passport2.default.authenticate('basic', { session: false });
//# sourceMappingURL=auth.js.map
//# sourceMappingURL=auth.js.map