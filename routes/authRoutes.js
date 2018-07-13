const passport = require('passport');
const auth = require('express').Router();

auth.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

auth.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/surveys');
  }
);

module.exports = auth;
