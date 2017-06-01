'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var GifSchema = new _mongoose2.default.Schema({
  type: String,
  meta: {
    name: String,
    url: String
  },
  userId: String
});

module.exports = _mongoose2.default.model('Gif', GifSchema);
//# sourceMappingURL=gif.js.map
//# sourceMappingURL=gif.js.map