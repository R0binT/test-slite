import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import gifController from './controllers/gif';
import emojiController from './controllers/emoji';
import userController from './controllers/user';
import authController from './controllers/auth';

mongoose.connect('mongodb://localhost:27017/test');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(passport.initialize());

var router = express.Router();

router.route('/gifs/search/:gifQuery')
  .get(authController.isAuthenticated, gifController.getGifs)

router.route('/gifs/favorite')
  .post(authController.isAuthenticated, gifController.favoriteGif)

router.route('/emojis/search/:emojiQuery')
  .get(authController.isAuthenticated, emojiController.getEmoji)

router.route('/emoji/favorite')
  .post(authController.isAuthenticated, emojiController.favoriteEmoji)

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

app.use('/api', router);

app.listen(3000);
