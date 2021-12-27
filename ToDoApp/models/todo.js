const mongoose=require('mongoose');

//making schema now
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        required:true
    }
});



const Todo= mongoose.model('Todo',todoSchema);
module.exports=Todo;

