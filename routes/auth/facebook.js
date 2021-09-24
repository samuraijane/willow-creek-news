const express = require('express');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const { User } = require('../../models');

const router = express.Router();

passport.use(new FacebookStrategy({
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  profileFields: ["id", "name", "picture.type(large)"]
},
async function(accessToken, refreshToken, profile, cb) {
  let user = await User.findOrCreate({
    where: {
      // TODO add avatarURL to database – it cannot be added here because the value of the URL changes with each login so adding it here creates duplicate users with each login
      //avatarURL: profile.photos[0].value,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      loginStrategy:    profile.provider,
      loginStrategyId:  profile.id
    }
  });
  cb(null, profile)
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});


router.get('/', passport.authenticate('facebook'));

router.get('/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect(`/profile/${req.session.passport.user}`);
  }
);

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/blah')
});

module.exports = router;