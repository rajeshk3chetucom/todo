const express = require('express');
const {connect} = require('mongoose');
const dbUrl = 'mongodb+srv://shubhaml:chetu123@cluster0.nb04r.mongodb.net/todoapp?retryWrites=true&w=majority';
const bodyParser = require('body-parser');

const AuthRouter = require('./routes/auth');

const app = express();

//Middleware setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/auth', AuthRouter);

// Initial Setup
app.listen(8000,(err)=>{
    if (err){
        console.log('Error while connecting to 8000 port ', err)
        return false;
    }
    console.log('Listing on port 8000');
    connect(dbUrl).then(()=>{
        console.log('Connected to the database');
    }).catch(err=>{
        console.log('Error while connecting to the database',err);
    })
})
