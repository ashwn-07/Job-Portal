const express = require("express");
const app = new express();
const path = require("path");
const multer = require("multer");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./dbconn/dbconn");

const JobModel = require("./Models/JoblistingModel");

app.use(morgan("dev"));

app.use(cors());

const empapi = require("./Routers/EmpRouter");
const jobs = require("./Routers/JobRoutes");
const jobres = require("./Routers/ResponseRouter");
const user = require("./Routers/UserRouter");
const login = require("./Routers/LoginRouter");
app.use("/api", empapi);
app.use("/api", jobs);
app.use("/api", jobres);
app.use("/api", user);
app.use("/api", login);

const PORT = process.env.PORT;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

app.post("/upload", upload.single("resume"), async  (req, res) => {
    try {
        console.log(req.file);
        const responderid=req.body.responderid;
        const path=req.file.filename;
        const posterid=req.body.posterid
        const jobId=req.body.jobId;
        // console.log(req.body.posterid);
        const response = {
           
                     responsetype: "pdf",
                     path: path,
                     responderid: responderid
          
           }
           console.log(response);
           const data = await JobModel.findByIdAndUpdate(jobId, {
           $push: {
              responses: response, // {responsetype:type , path:fpath}
              
          },
        
        })
        res.status(200).json({ message: "File Uploaded" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "cannot upload" });
    }
});


//to download the file
app.get("/download/:path",async (req, res)=>{
    const filename = req.params.path

    try {
        res.download(`./uploads/${filename}`)
    } catch (error) {
        console.log(error)
        res.status(404).json({message:'error'})
    }
    
} )

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
