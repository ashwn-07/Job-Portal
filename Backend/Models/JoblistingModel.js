const mongoose = require ('mongoose')
const jobSchema = mongoose.Schema({
CompanyName:String,
JobTitle:String,
JObDesc:String,
Experience:Number,
Salary:Number,
loctaion:String,
responses: {
    type: [{
      type: {
        type: String,
        enum: ['link', 'pdf'],
        required: true,
      },
       value: {
        type: String,
        required: true,
      },
    }],
    default: [],
  },
CreatedAt:{
    type: Date,
    default: new Date()
},
ExpiresAt: new Date(date)




})