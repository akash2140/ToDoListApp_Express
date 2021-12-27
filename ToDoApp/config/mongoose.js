//Requiring up Mongoose
const mongoose= require('mongoose');

//connecting mongoose with mongoDb 
mongoose.connect('mongodb://localhost/todolist_db');

//fetching the access to db
const db=mongoose.connection;

//checking if the connection has gone into error or not
db.on('error',console.error.bind(console,'Connection Error'));

//Connection successfull callback function defined
db.once('open',function(){
    console.log('successfully connected to db');
});