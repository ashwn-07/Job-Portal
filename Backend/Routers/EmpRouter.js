const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const EmpModel=require('../Models/EmpModel');




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
//...get../viewemp
router.get('/viewemp',async(req,res)=>{
try{
    const data=await EmpModel.find();
    res.json(data)
}catch(error){res.json(error)}
})
module.exports=router;