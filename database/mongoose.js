const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Database connected`);
  }).catch(e => {
    console.log(`Could not connect to the database.`);
    console.log(e);
  })
