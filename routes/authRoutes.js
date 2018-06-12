const passport = require('passport');
const auth = require('express').Router();

auth.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

auth.get('/google/callback',
  passport.authenticate('google'), (req, res) => {
    res.send(req.user);
  }
);

module.exports = auth;
