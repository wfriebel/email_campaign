const express = require('express');
const mongoose = require('mongoose');

require('./config/config.js');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes')

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('GET /');
})

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
