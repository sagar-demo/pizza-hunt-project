const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true

    },
    lastname:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
},{
    //it will when user is updated or created in db
    timestamps:true
});
const User=mongoose.model('User',userSchema);
module.exports=User;
