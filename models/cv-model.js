const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cvSchema = new Schema({
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
        required: true,
     },
    experience: [{
        companyName: { type: String, required: true },
        duration: { type: Number, required: true },
        tasks: { type: String, required: true },
    }],
    education: [{
        studyName: { type: String, required: true },
        schoolName: { type: String, required: true },
        duration: { type: Number, required: true },
    }],
    languages: [{ type: String, required: true }],
    addAchievements: { type: String },
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

const Cv = mongoose.model("Cv", cvSchema);

module.exports = Cv;