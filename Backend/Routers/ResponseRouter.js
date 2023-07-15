const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const JobModel = require('../Models/JoblistingModel');

//api to add responses to joblistings
router.put("/apply", async (req, res) => {
    try {
        const jobid = req.body._id;
        const response = req.body.responses;
        // const type = response.responsetype;
        // const fpath = response.path
        const data = await JobModel.findByIdAndUpdate(jobid, {
            $push: {
                responses: response, // {responsetype:type , path:fpath}
            },
        });

        //console.log(data);

        res.status(200).json({ message: `Response Submitted Successfully!` });
    } catch (err) {
        console.log(err);

        res.status(200).json({
            message: `Response not added, ERR ${err}`,
        });
    }
});

//api to fetch the nessecary job details and responses for admin

router.get("/getresponses", async (req, res) => {
    try {
        const data = await JobModel.find({}, { CompanyName: 1, JobTitle: 1, responses: 1 });
        res.status(200).json({ message: "jOb data with responses", data: data });
    } catch {
        console.log(err);

        res.status(200).json({ message: `Cannot get the data, ERR ${err}` });
    }
});

//we can use job id that is passed as props and get the responses of that particular job
router.post("/viewresponses", async (req, res) => {
    try {
        jobid = req.body._id;
        const data = await JobModel.find({ _id: jobid }, { responses: 1,  });
        res.status(200).json({
            message: `Responses for the job listing with id: ${jobid}`, data: data });
    } catch (error) {
        console.log(err);

        res.status(200).json({ message: `Cannot get the responses, ERR ${err}` });
    }
});

//api for employers to fetch verified responses, this is optional
// router.get('/verifiedres', async(req, res)=>{})

module.exports = router;
