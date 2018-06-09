const passport = require('passport');
const auth = require('express').Router();

auth.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

auth.get('/google/callback',
  passport.authenticate('google')
);

module.exports = auth;
