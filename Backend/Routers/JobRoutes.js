const express = require("express");
const router = express.Router();
const jwt=require("jsonwebtoken")

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const JobModel = require("../Models/JoblistingModel");

//api for adding the jobs
router.post("/addjob", async (req, res) => {
    try {
        const job = req.body;
        jwt.verify(req.body.token,"ictjp",(error,decoded)=>{
            if (decoded && decoded.email) {
                JobModel(job).save();
        res.json({message:"Job added sucessfully!!"})  
            } else {
                res.status(200).json({ message: "unauthorised user" })
            }
        })
        
    } catch (err) {
        res.status(404).json({ message: `Cannot add job ERR`, error:err  });
    }
});
//api for getting all the jobs
router.get("/viewjobs", async (req, res) => {
    try {
        const data = await JobModel.find({}, {responses:0});
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ mesaage: `Cannot get Jobs ${err}` });
    }
});
//api for getting all jobs posted by a particular employee
router.get("/viewjobs/:id",async(req,res)=>{
    try {
        const posterid=req.params.id;
        console.log("posterid"+posterid)
        const data=await JobModel.find();
        
        const emposts=[]
    data.forEach(element => {
        if(element.posterid==posterid){
            emposts.push(element)
        }
        
     });
    res.send(emposts);
    } catch (err) {
        console.log(err)
    }
    
})
//api for updating the jobs
router.put("/update/:id", async (req, res) => {
    try {
        let id=req.params.id;
        
        const newData = req.body;
        const data = await JobModel.findByIdAndUpdate(id, {
            $set: {
                companyname: newData.companyname,
                jobrequirements: newData.jobrequirements,
                jobtitle: newData.jobtitle,
                jobdesc: newData.jobdesc,
                eligibility:newData.eligibility,
                experience: newData.experience,
                salary: newData.salary,
                location: newData.location,
                ExpiresAt: newData.ExpiresAt
            },
        });
        res.status(200).json({ message: "Job Details Updated Successfully" });
    } catch (error) {
        res.status(404).json({ message: "Error!! Update not Successfull", err:error });
        
    }
});
//api for deleting the jobs

router.delete("/deletejob/:id", async (req, res) => {
    try {
        jobid = req.params.id;
        // console.log(pos)
        const data = await JobModel.findOneAndDelete({ _id: jobid });
        res.status(200).send({ message: "Job deleted Successfully" });
    } catch (error) {
        res.status(404).json({ message: "Error!! Deletion not completed" });
        console.log(error);
    }
});
//api for finding one particular student  in joblisting  
router.post('/findinresponse/:id',async(req,res)=>{
    let id=req.params.id
    let user=await UserModel.findOne({_id:id})
    if(user){
        res.status(200).json({message:"user exists"})
   
    }

})    

module.exports = router;
