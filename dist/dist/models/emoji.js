'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EmojiSchema = new _mongoose2.default.Schema({
  type: String,
  meta: {
    key: String,
    emoji: String
  },
  userId: String
});

// Export the Mongoose model
module.exports = _mongoose2.default.model('Emoji', EmojiSchema);
//# sourceMappingURL=emoji.js.map
//# sourceMappingURL=emoji.js.map