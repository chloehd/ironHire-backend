const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema ({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    telephoneNumber: { type: Number },
    employmentStatus: { type: String }, 
    skills: { type: String },
    experience: { type: String },
    languages: { type: String },
    education: { type: String },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

});

module.exports = Candidate; 
