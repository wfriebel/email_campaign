const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport');

require('./config/config.js');
require('./models/User.js');
require('./services/passport.js');
require('./database/mongoose.js');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  if(req.user) {
    res.send(req.user);
  } else {
    res.send('You are currently logged out');
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
