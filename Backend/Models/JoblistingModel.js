const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    CompanyName: String,
    JobTitle: String,
    JObDesc: String,
    Experience: Number,
    Salary: Number,
    loctaion: String,
    responses: {
        type: [
            {
                responsetype: {
                    type: String,
                    enum: ["link", "pdf"],
                    required: false,
                },
                path: {
                    type: String,
                    required: false,
                 },
                Verified: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
        default: [],
    },
    CreatedAt: {
        type: Date,
        default: new Date(),
    },
    ExpiresAt: Date,
});

const JobModel = mongoose.model("joblisting", JobSchema);

module.exports = JobModel;
