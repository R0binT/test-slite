'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _gif = require('./controllers/gif');

var _gif2 = _interopRequireDefault(_gif);

var _emoji = require('./controllers/emoji');

var _emoji2 = _interopRequireDefault(_emoji);

var _user = require('./controllers/user');

var _user2 = _interopRequireDefault(_user);

var _auth = require('./controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_mongoose2.default.connect('mongodb://localhost:27017/test');

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

app.use(_passport2.default.initialize());

var router = _express2.default.Router();

router.route('/gifs/search/:gifQuery').get(_auth2.default.isAuthenticated, _gif2.default.getGifs);

router.route('/gifs/favorite').post(_auth2.default.isAuthenticated, _gif2.default.favoriteGif);

router.route('/emojis/search/:emojiQuery').get(_auth2.default.isAuthenticated, _emoji2.default.getEmoji);

router.route('/emoji/favorite').post(_auth2.default.isAuthenticated, _emoji2.default.favoriteEmoji);

router.route('/users').post(_user2.default.postUsers).get(_auth2.default.isAuthenticated, _user2.default.getUsers);

app.use('/api', router);

app.listen(3000);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map