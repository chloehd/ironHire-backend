const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    profilePic: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
      }, 
    telephoneNumber: { type: Number },
    employmentStatus: { 
        type: String,
        enum: ["searching", "open to offers", "employed"],
     },
    experience: [{
        experience: { type: String, required: true }
    }],
    education: [{
        education: { type: String, required: true },
    }],
    languages: [{ type: String, required: true }],
    skills: { type: String },
    verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    encryptedPassword: { type: String },
    role: {
        type: String,
        enum: ["candidate", "admin", "recruiter", "association"],
        required: true,
        default: "candidate",
    }
}, {
        timestamps: true
    });

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;