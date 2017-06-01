'use strict';

var _nodeEmoji = require('node-emoji');

var _nodeEmoji2 = _interopRequireDefault(_nodeEmoji);

var _emoji = require('../models/emoji');

var _emoji2 = _interopRequireDefault(_emoji);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.getEmoji = function (req, res) {
  if (!req.params.emojiQuery) {
    res.status(400).send('query empty');
  } else {
    var ret = _nodeEmoji2.default.search(req.params.emojiQuery);
    if (ret) {
      res.status(200).json(ret);
    } else {
      res.status(204).send();
    }
  }
};

exports.favoriteEmoji = function (req, res) {
  var emoji = new _emoji2.default();

  emoji.type = req.body.type;
  emoji.meta = req.body.meta;
  emoji.userId = req.user._id;

  emoji.save(function (err) {
    if (err) return res.send(err);

    res.json({ message: 'Emoji saved', data: emoji });
  });
};
//# sourceMappingURL=emoji.js.map
//# sourceMappingURL=emoji.js.map