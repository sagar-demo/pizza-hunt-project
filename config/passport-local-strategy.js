const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../model/usersingup');

// authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
},
function(req, email, password, done){
    // find a user and establish the identity
    User.findOne({email: email}, function(err, user)  {
        if (err){
            req.flash('error', err);
            return done(err);
        }

        if (!user || user.password != password){
            req.flash('error', 'Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    });
}


));

//serializing the user to decide which key is to be kep in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});
//deserialize 
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log('Error in finding user passport');
        return done(err);
    }
    return done(null,user);
    })
})
module.exports=passport;