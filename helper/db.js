const mongoose =require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb+srv://user',{useNewUrlParser: true,useUnifiedTopology: true});
    mongoose.connection.on('open',()=>{
        console.log('mongoDB:Connected');
    });
    mongoose.connection.on('error',(err)=>{
        console.log('mongoDB:Error', err);
    });
    mongoose.Promise=global.Promise;
};
