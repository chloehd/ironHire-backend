const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    candidate_pic: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
      }, 
    telephone_number: { type: Number },
    employment_status: { 
        type: String,
        enum: ["searching", "open to offers", "employed"],
     },
    experience: {
        experience: { type: String, required: true }
    },
    education: {
        education: { type: String },
    },
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

const Candidate = mongoose.model("Cv", candidateSchema);

module.exports = Candidate;
