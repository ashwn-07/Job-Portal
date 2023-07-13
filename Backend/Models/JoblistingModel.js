const mongoose = require ('mongoose')
const jobSchema = mongoose.Schema({
CompanyName:String,
JobTitle:String,
JObDesc:String,
Salary:Number,
loctaion:String,
responses:{
    url:{

    }
},
CreatedAt:{
    type: Date,
    default: new Date()
},
ExpiresAt:Date




})