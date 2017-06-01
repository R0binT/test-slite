import passport from 'passport';
import passportHttp from 'passport-http';
import User from '../models/user';

passport.use(new passportHttp.BasicStrategy((username, password, callback) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) return callback(err);

      if (!user) return callback(null, false);

      user.verifyPassword(password, (err, isMatch) => {
        if (err) return callback(err);

        if (!isMatch) return callback(null, false);

        return callback(null, user);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });
