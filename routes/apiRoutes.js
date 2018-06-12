const express = require('express');
const api = express.Router();

api.get('/current_user', (req, res) => {
  res.send(req.user);
})

api.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = api;
