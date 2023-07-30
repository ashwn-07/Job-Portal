const mongoose=require('mongoose')
const AlumniregSchema=mongoose.Schema({
    regnum:String,
    emailid:String
    
})
const AlumniregData=mongoose.model('alumniregdetail',);
module.exports=AlumniregData;