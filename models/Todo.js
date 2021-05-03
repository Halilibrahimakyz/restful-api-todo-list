const mongoose=require('mongoose');
const Schema =mongoose.Schema;
/*
 TODO şeması
*/

const TodoSchema=new Schema({
    todo_id:    Schema.Types.ObjectId,
    description:{
                type:String,
                required:true
    },
    datetime:{
                type : Date,
                default: Date.now
    },
    complete:{
                type:Boolean,
                default:false
    },

    month:{
        type:Number,
        required:true,
        max:12,
        min:1
    },
    day:{
        type:Number,
        required:true,
        max:31,
        min:1
    }
});
module.exports=mongoose.model('todo',TodoSchema);