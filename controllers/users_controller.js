const User=require('../model/usersingup');
module.exports.profile = function(req, res){
    // return res.send('<h1>Hello welcome</h1>');
   return res.render('user_profile',{
    title:"Use Profile"
   });

}

//render the sign up page
module.exports.signup=function(req,res){
    return res.render('signUp',{
        title:"Sign-Up"
    })
};
//render the sign in page
module.exports.SignIn=function(req,res){
    return res.render('signIn',{
        title:"Sign-In Page"
    });
};

//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    //find user by email id from database
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding user in signing up');return};
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('Error in createing user while signing up');return }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });

}
// sign in and create a session for the user
module.exports.createSession=function(req,res){
    return res.redirect('/');
    
}