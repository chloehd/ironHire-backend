const express = require("express");
const bcrypt = require("bcrypt");
const Recruiter = require("../models/recruiter-model.js");
const Jobs = require("../models/job-model.js");
const Candidate = require("../models/candidate-model.js");

const router = express.Router();


// GET all of candidate data 
router.get("/", (req, res, next) => {
  Candidate.find()
    .then(candidateResults => {
      res.json(candidateResults)})
    .catch(err => next(err));
});

//GET one candidate 
router.get("/allcandidates/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  
  Candidate.findById(id)
    .then(candidateDoc => {res.json(candidateDoc)
    console.log("one id thing", candidateDoc);
    })
    .catch(err => next(err));
});


router.get("/add-job", (req, res, next) => {
  Candidate.find()
    .sort({first_name: -1})
    .then(candidateResults => res.json(candidateResults))
    .catch(err => next(err));

});

router.post("/add-job", (req, res, next) => {
  const { name, salary, educationLevel, description, contractType, location, deadline } = req.body;

    Jobs.create({ name, salary, educationLevel, description, contractType, location, deadline, owner: req.user })
      .then(jobsDoc => res.json(jobsDoc))
      .catch();
});


router.post("/signup", (req, res, next) => {
  const { companyName, email, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    next(new Error("Incorrect password."));
    return; 
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Recruiter.create({ companyName, email, encryptedPassword })
    .then(userDoc => {
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      })
    })
    .catch(err => next(err));
});




module.exports = router;
