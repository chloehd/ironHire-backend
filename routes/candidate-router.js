const express = require("express");
const bcrypt = require("bcrypt");
const Jobs = require("../models/job-model.js");
const router = express.Router();

// GET all of candidate data 
router.get("/", (req, res, next) => {
    Jobs.find()
      .then(jobResults => res.json(jobResults))
      .catch(err => next(err));
  });
  
//"POST" create a new candidate profile (add to the list)
router.post("/", (req, res, next) => {
  const {
    candidatePic,
    firstName,
    lastName,
    email,
    telephoneNumber,
    employmentStatus,
    skills,
    experience,
    languages,
    education
  } = req.body;

  Candidate.create({
    candidatePic,
    firstName,
    lastName,
    email,
    telephoneNumber,
    employmentStatus,
    skills,
    experience,
    languages,
    education
  })
    .then(candidateDoc => res.json(candidateDoc))
    .catch(err => next(err));
});

// will add put(update) and delete routes later -hw

module.exports = router;
