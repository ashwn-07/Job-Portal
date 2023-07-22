const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const JobModel = require("../Models/JoblistingModel");

//api for adding the jobs
router.post("/addjob", async (req, res) => {
    try {
        const job = req.body;
        await JobModel(job).save();
        res.status(200).json({ message: "Job added sucessfully!!" });
    } catch (err) {
        res.status(404).json({ message: `Cannot add job ERR:${err}` });
    }
});
//api for getting all the jobs
router.get("/viewjobs", async (req, res) => {
    try {
        const data = await JobModel.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(404).json({ mesaage: `Cannot get Jobs ${err}` });
    }
});
//api for updating the jobs
router.put("/update/", async (req, res) => {
    try {
        const id = req.body._id;
        const newData = req.body;
        const data = await JobModel.findByIdAndUpdate(id, {
            $set: {
                companyname: newData.companyname,
                jobrequirements: newData.jobrequirements,
                jobtitle: newData.jobtitle,
                jobdesc: newData.jobdesc,
                experience: newData.experience,
                salary: newData.salary,
                loctaion: newData.loctaion,
            },
        });
        res.status(200).json({ message: "Job Details Updated Succesfully" });
    } catch (error) {
        res.status(404).json({ message: "Error!! Update not Successfull" });
        console.log(error);
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

module.exports = router;
