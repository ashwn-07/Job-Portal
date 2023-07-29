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

// student profile creation and updation
router.post("/studendProfile", async(req,res)=>{
    try {
        let prof=req.body.data;
        let alid=req.body.alumniId;
        let newdata={
            "alumniId":alid,
            prof,  
        }

        //  updation of profile
        let alreadyProf= await StudProfModel.findOne({alumniId:alid});
        if (alreadyProf) {
            let updata = await StudProfModel.findOneAndUpdate(
                { "alumniId": alid },
                { $set: { "prof": prof }},
            );
            updata.save()
        res.json({message:"Profile successfully updated"})

        // creation of profile
        } else {
            console.log(newdata);
            let profdata= await StudProfModel(newdata).save();
            res.json({message:"profile saved successfully"});
            console.log("profile saved successfully")
        }
        
    } catch (error) {
        res.json({message:"failed to saved "});
    }  
  
})


        

module.exports=router;