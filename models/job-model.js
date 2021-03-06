const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema ({
    
    name: { type: String, required: true },
    salary: { type: Number },
    educationLevel: { type: String },
    description: { type: String, required: true },
    contractType: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date },
    deadline: { type: Date, required: true},
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Recruiter",
        role: "recruiter",
     },
}

);
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;