const mongoose=require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/pizza_db',{useNewUrlParser:true});
// const db=mongoose.connection;
// db.on('error',console.log.bind(console,'Error connecting in db'));
// db.once('open',function(){
//     console.log('Connected to the database');
// });
const url='mongodb://127.0.0.1:27017/pizza-db';
mongoose.connect(url,{useNewUrlParser:true});
const db=mongoose.connection;
db.once('open',()=>{
    console.log('Database connected🙂');
});
db.on('err',err=>{
    console.log('Error in connecting err:',err);
})

    




