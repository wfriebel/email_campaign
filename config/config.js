const env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  const keys = require('./keys');
  process.env.PORT = 5000;
  process.env.GOOGLE_CLIENT_ID = keys.googleClientID;
  process.env.GOOGLE_CLIENT_SECRET = keys.googleClientSecret;
  process.env.MONGODB_URI = keys.mongodbURI;
  process.env.SESSION_SECRET = keys.sessionSecret;
}
