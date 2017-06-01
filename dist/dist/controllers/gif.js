'use strict';

var _giphyApi = require('giphy-api');

var _giphyApi2 = _interopRequireDefault(_giphyApi);

var _gif = require('../models/gif');

var _gif2 = _interopRequireDefault(_gif);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var giphy = (0, _giphyApi2.default)();

exports.getGifs = function (req, res) {
  if (!req.params.gifQuery) {
    res.status(400).send('query empty');
  } else {
    giphy.search({
      q: req.params.gifQuery,
      limit: 20
    }).then(function (emojis) {
      res.json(emojis);
    }).catch(function (err) {
      res.status(401).send(err);
    });
  }
};

exports.favoriteGif = function (req, res) {
  var gif = new _gif2.default();

  gif.type = req.body.type;
  gif.meta = req.body.meta;
  gif.userId = req.user._id;

  gif.save(function (err) {
    if (err) return res.send(err);

    res.json({ message: 'Emoji saved', data: gif });
  });
};
//# sourceMappingURL=gif.js.map
//# sourceMappingURL=gif.js.map