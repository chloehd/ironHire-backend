const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
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
=======
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
>>>>>>> f21626b8d3efcbd762ab38a9d94646ecaeb98be8
