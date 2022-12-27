const express=require('express');
const passport=require('passport');
const router=express.Router();
//accessing the users_controllers
const userContollers=require('../controllers/users_controller');
//user_Controllers router by using router.get
router.get('/profile',userContollers.profile);
//user signup routes
router.get('/sign-up',userContollers.signup);
//user sign in routes
router.get('/sign-in',userContollers.SignIn);

//form route sign up
router.post('/create',userContollers.create);
//use passport as a middle ware to authenticate
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'}),userContollers.createSession)

module.exports=router;