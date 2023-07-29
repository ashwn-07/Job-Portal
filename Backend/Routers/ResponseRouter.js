const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const JobModel = require("../Models/JoblistingModel");
const { ObjectId } = require("bson");

//api to add responses to joblistings
router.put("/apply", async (req, res) => {
    try {
       // let id=req.params.id
      
        const jobid = req.body._id;
        const response = req.body.responses;
        const userid =response.responderid
        // const type = response.responsetype;
        // const fpath = response.path
        
        let user= await JobModel.findOne({_id:jobid,'responses.responderid':userid})
        
        if(!user){
           
       const data = await JobModel.findByIdAndUpdate(jobid, {
          $push: {
                responses: response, // {responsetype:type , path:fpath}
            },
        });

        //console.log(data);

        res.status(200).json({ message: `Response Submitted Successfully!` });
    }else{
        res.status(200).json({ message: `alredy applied` });
    } }
  catch (err) {
        console.log(err);

        res.status(404).json({
            message: `Response not added, ERR ${err}`,
        });
    }

});

//api to fetch the nessecary job details to get responses for admin

router.get("/getresponses", async (req, res) => {
    try {
        const data = await JobModel.find({}, { companyname: 1, jobtitle: 1});
        res.status(200).json({ message: "job data with responses", data: data });
    } catch (err){
        console.log(err);

        res.status(404).json({ message: `Cannot get the data, ERR ${err}` });
    }
});

//we can use job id that is passed as props and view the responses of that particular job fpr admin
router.get("/viewresponses/:jobid", async (req, res) => {
    console.log(req.params.jobid)
    try {
        jobid = req.params.jobid;
        console.log(jobid)
        const data = await JobModel.find({ _id: jobid }, { responses: 1 });
        res.status(200).json({  message: `Responses for the job listing with id: ${jobid}`,
            data: data });
    } catch (err) {
        console.log(err);

        res.status(404).json({ message: `Cannot get the responses, ERR ${err}` });
    }
});


//api for admin to verify the  responses
router.put("/verifyres/:resid", async (req,res)=>{
    try {
        resid= req.params.resid;
     const  data =  await JobModel.findOneAndUpdate(
        { "responses._id": resid },
        { $set: { "responses.$.Verified": true }},
        { new: true } // to return the updated document
      );

     res.status(200).json({message:'Verified'})    
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Cannot Verify"});
    }
})

//api for employers to fetch verified responses for the job,
router.get("/verifiedres/:jobid", async (req, res) => {
    try {
        console.log(req.params.jobid)
        const jobid = req.params.jobid;

      
        await JobModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(jobid),
                    "responses.Verified": true,
                },
            },
            {
                $project: {
                    responses: {
                        $filter: {
                            input: "$responses",
                            as: "response",
                            cond: { $eq: ["$$response.Verified", true] },
                        },
                    },
                },
            },
        ])
            .then((filteredData) => {
                res.json({ message: "responses fetched successfully", data: filteredData});
            })
            .catch((err) => {
                console.log(err)
                res.status(404).json({ message: "Cannot get the data"});
            });
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: "Cannot get the data"});
    }
});

module.exports = router;
