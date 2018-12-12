const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema ({
    
    role: { type: String, required: true },
    description: { type: String, required: true },
    contractType: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, required: true },
    deadline: { type: Date, required: true},





}

);
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;