const mongoose=require('mongoose')
const EmpSchema=mongoose.Schema({
    name:String,
    emailid:String,
    phone:String,
    designation:String,
    companyName:String,
    location:String,
    username:String,
    password:String,
    verified:{
        type: Boolean,
        default: false,
    }
});
const EmpData=mongoose.model('employerdetail',EmpSchema);
module.exports=EmpData;