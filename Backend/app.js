const express=require('express');
const app=new express();

const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');

require ('dotenv').config();
require("./dbconn/dbconn")

app.use(morgan('dev'));

app.use(cors());

const empapi=require('./Routers/EmpRouter');
const jobs = require('./Routers/JobRoutes');
const jobres = require('./Routers/ResponseRouter');
const user =require('./Routers/UserRouter');
const login=require('./Routers/LoginRouter');
app.use('/api',empapi);
app.use('/jobs', jobs);
app.use('/jobs', jobres);
app.use('/api',user);
app.use('/api',login);

const PORT=process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})