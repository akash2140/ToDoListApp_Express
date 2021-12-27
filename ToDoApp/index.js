//Requiring Express
const express=require('express');

//Setting the port No
const port=8000;

//Requiring the path
const path=require('path');

//Firing up Express
const app=express();

//requiring the db connection
const db= require('./config/mongoose');

//Fetching the DB access
const Todo=require('./models/todo');
//Setting the title of App
const title='ToDo List';

// Setting up the static files folder
app.use(express.static('Assests'));

//Using Boot strap 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//using the parser
app.use(express.urlencoded());

//settting up view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Root home page router and controller
app.get('/',function(req,res){
    Todo.find({},function(err,tasks){
        console.log(tasks);
        return res.render('home',{
            title:title,
            tasks_list:tasks
        })
    });
});

// Create task route and controller
app.post('/create-task',function(req,res){
    console.log('****Creating the task ******** In Progress *********');
    Todo.create(req.body,function(err,newTask){
        if(err){
            console.log('Unable to add the task'+err);
            return;
        }
        console.log('**** task Added ******** Done *********',newTask);
        return res.redirect('back');
    });
});

//deleting the task router & Controller
app.get('/delete-task',function(req,res){
    let id=req.query.id;
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting the task Please check log file for more details');
            return;
        }
        return res.redirect('back');
    })
});

//Listening to the app on the defined port 
app.listen(port, function(err){
    if(err){
        console.log('Not able to connect to the server');
        return;
    }
    console.log('Succssfully connected to the server');
});