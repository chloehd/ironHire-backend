const express = require("express");

const Candidate = require("../models/candidate-model.js");

const router = express.Router();

// "GET" retrieve the details ONE Candidate
router.get("/candidates", (req, res, next) => {
  Candidate.find()
    .then(candidateResults => res.json(candidateResults))
    .catch(err => next(err));
});


router.get("/candidatedata", (req, res, next) => {
  Candidate.find()
    .then(candidateResults => res.json(candidateResults))
    .catch(err => next(err));
});



//"POST" create a new candidate profile (add to the list)
router.post("/candidates", (req, res, next) => {
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
    .then(candidateDoc => res.jeson(candidateDoc))
    .catch(err => next(err));
});

// will add put(update) and delete routes later -hw

module.exports = router;
