const express=require('express');
const cookie=require('cookie-parser');
const app=express();
const path=require('path');
const flash=require('notify-send');
const port=7000;
//layout library importing
const expresslayouts=require('express-ejs-layouts');
//database connection
const db=require('./config/mongoose');
//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
// const MongoStore = require('connect-mongo');

//adding css file and script tag
app.use(express.static(__dirname+'/assets'));
app.use(expresslayouts);
//calling cookie parser and urlendcoded
app.use(express.urlencoded());
// app.use(cookie);

//extact style and scripts from the sub page into the layouts
app.set('layout extractStyle',true);
app.set('layout extractScript',true);

//use express router
app.use('/',require('./routes'))
//view engine setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.set('trust proxy',1);
// app.use(session({
//     secret:'abc',
//     resave:false,
//     saveUninitialized:true,
//     cookie:{secure:true}
// }))
// app.use(passport.initialize());
// app.use(passport.session());
app.listen(port,function(err){
    if(err){console.log(`Error in creating ${err}`);}
    console.log(`Server is Running on port ${port}`);
});
