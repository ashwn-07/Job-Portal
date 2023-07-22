const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const EmpModel=require('../Models/EmpModel');
//...post.../login api
router.post('/emplogin',async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    const user=await EmpModel.findOne({username:username});
    if(!user){
        res.json({message:"User not found"})
    }
    try{
    if(user.password==password){
        res.json({message:"Login Successfully"})
    }
    else{
        res.json({message:"Login Failed"})
    }
}catch(error){
    console.log(error)
}
})

//post....empSignup api
router.post("/empsignup",async(req,res)=>{
    try{
        const emp=req.body;
        newEmp= new EmpModel(emp);
        const savedata=await newEmp.save();
        res.status(200).json({message:"Added Emp details Sucessfully"})
    }catch(error){
        res.status(400).json("Cannot add")
    }
})
module.exports=router;