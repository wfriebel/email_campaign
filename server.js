require('./config.js');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('GET /');
})

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
})
