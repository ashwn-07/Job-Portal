const mongoose=require('mongoose')
const EmpSchema=mongoose.Schema({
    name:String,
    emailid:String,
    phone:String,
    Designation:String,
    CompanyName:String,
    Location:String,
    username:String,
    password:String
});
const EmpData=mongoose.model('employerdetail',EmpSchema);
module.exports=EmpData;