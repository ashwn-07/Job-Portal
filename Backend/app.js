const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
const app=new express();
require ('dotenv').config();
require("./dbconn/dbconn")
app.use(morgan('dev'));
app.use(cors());
const empapi=require('./Routers/EmpRouter');
app.use('/api',empapi);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})