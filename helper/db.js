const mongoose =require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb+srv://halilibrahimakyz:abcd1234@cluster0.646kx.mongodb.net/restful-api',{useNewUrlParser: true,useUnifiedTopology: true});
    mongoose.connection.on('open',()=>{
        console.log('mongoDB:Connected');
    });
    mongoose.connection.on('error',(err)=>{
        console.log('mongoDB:Error', err);
    });
    mongoose.Promise=global.Promise;
};