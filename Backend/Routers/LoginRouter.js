const express= require ('express');
const router= express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const UserModel=require('../Models/UserModel');
const EmpModel=require('../Models/EmpModel');
const AdminModel=require('../Models/Adminmodel');

router.post('/login',async(req,res)=>{
    let password=req.body.password;
    let username=req.body.username;
    let user=await UserModel.findOne({username:username})
    try {
        if (!user) {
            let emp= await EmpModel.findOne({username:username})
            if (!emp) {
                 let admin=await AdminModel.findOne({username:username})
                if (!admin) {
                    
                    res.jsob({message:"un-authorised login"})

                } else {
                    if(admin.password==password){
                        res.json({message:" Admin Login successful"})  
                    }

                    else{
                        console.log("password");
                        res.jsob({message:"un-authorised login"})
                    }
                }  
            } else {
                console.log("empname");
                if(emp.password==password){
                    res.json({message:" Employer Login successful"})  
                }

                else{
                    res.json({message:"un-authorised login"}) 
                } 
            }
            
        } else {
            console.log("usernme");
            if(user.password==password){
                res.json({message:" User Login successful"})
            }
            
            else{
                res.json({message:"un-authorised login"}) 
            } 
        }
    } catch (error) {
        res.json({message:"smtnhg went wrong"});
    }
    
})

module.exports=router;