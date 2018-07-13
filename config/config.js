const env = process.env.NODE_ENV || 'development';
const path = require('path');

if(env === 'development') {
  require('dotenv').config({ path: path.join(__dirname, '../.env.development')});
}
