'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var UserSchema = new _mongoose2.default.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (callback) {
  var user = this;

  if (!user.isModified('password')) return callback();

  _bcryptNodejs2.default.genSalt(5, function (err, salt) {
    if (err) return callback(err);

    _bcryptNodejs2.default.hash(user.password, salt, null, function (err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  _bcryptNodejs2.default.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = _mongoose2.default.model('User', UserSchema);
//# sourceMappingURL=user.js.map
//# sourceMappingURL=user.js.map