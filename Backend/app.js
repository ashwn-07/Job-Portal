const express=require('express');
const app=new express();
const path =require('path')
const multer=require("multer");
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const storage= multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads");
      },
      filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
      }
})
const upload=multer({storage})

app.post("/upload", upload.single('resume'), (req,res)=>{
//    console.log(req.body);
   console.log(req.file);
    res.send("uploaded");
})

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
app.use('/api', jobs);
app.use('/api', jobres);
app.use('/api',user);
app.use('/api',login);

const PORT=process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})