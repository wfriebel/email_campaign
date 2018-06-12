const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user._id);
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    }).catch(e => {
      console.log("No user could be found in the database when attempting to deserialize user out of session cookie");
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then(user => {
        if(user) {
          done(null, user);
        } else {
          const user = new User({ googleId: profile.id });
          user.save()
            .then((user) => {
              done(null, user);
            }).catch(e => {
              console.log('Error attempting to save a new user', e);
            });
        }
      }).catch(e => {
        console.log('Error accessing database to find a user', e);
      })
  })
);
