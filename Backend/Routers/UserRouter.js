const express= require ('express');
const router= express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const UserModel=require('../Models/UserModel');
const StudProfModel=require('../Models/StudProfModel');

// User Sign Up
router.post('/userSignUp', async(req,res)=>{
    try {
        let user= req.body;
        let newUser= await UserModel(user);
        newUser.save();
        res.json({message:"user saved successfully"});
        console.log("saved");
    } catch (error) {
        res.json(error);
        console.log(error);
    }
   
})

// student profile creation
router.post("/studendProfile", async(req,res)=>{
    try {
        let prof=req.body;
        let profdata= await StudProfModel(prof).save();
        res.json({message:"profile saved successfully"});
        console.log("profile saved successfully")
    } catch (error) {
        res.json({message:"failed to saved "});
    }  
  
})


//api for finding one particular student    
router.post('/findalumni/:id',async(req,res)=>{
    let id=req.params.id
    let user=await UserModel.findOne({_id:id})
    if(user){
        res.status(200).json({message:"user exists"})
   
    }

})    

module.exports=router;