const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const jobSchema = new Schema ({
    
    role: { type: String, required: true },
    description: { type: String, required: true },
    contractType: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: date, required: true },
    deadline: { type: date, required: true},





}

);
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;