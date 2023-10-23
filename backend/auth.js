const passport = require ('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID ='465033587681-k838p4tuqdhjt5nl9vendfm8nnii1o2j.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET ='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';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));

passport.serializeUser(function(user, done){
    done(null,user)
});

passport.deserializeUser(function(user, done){
    done(null,user)
});