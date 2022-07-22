const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app= express();


//setting
app.set('port', 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


//middlewears
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use(require('./routes/routes'));


//static
app.use(express.static(path.join(__dirname,'public')));


//404 handler
app.use((req,res)=>{
    res.status(404).send("404 Not Found");
})


module.exports = app;