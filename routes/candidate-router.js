const express = require("express");
const bcrypt = require("bcrypt");
const Jobs = require("../models/job-model.js");
const Candidate = require("../models/candidate-model.js");
const router = express.Router();

// GET all of candidate data 
router.get("/", (req, res, next) => {
    Jobs.find()
      .then(jobResults => res.json(jobResults))
      .catch(err => next(err));
});

  

  router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    Jobs.findById(id)
      // send the query results as a JSON response to the client
      .then(candidateDoc => res.json(candidateDoc))
      .catch(err => next(err));
  });


//"POST" create a new candidate profile (add to the list)
router.put("/", (req, res, next) => {
  const {
    candidate_pic,
    first_name,
    last_name,
    email,
    telephone_number,
    employment_status,
    skills,
    experience,
    languages,
    education
  } = req.body;

  const changes = {
    candidate_pic,
    first_name,
    last_name,
    email,
    telephone_number,
    employment_status,
    skills,
    experience,
    languages,
    education
  };

  Candidate.findByIdAndUpdate(
    req.user._id,
    { $set: changes },
    { runValidators: true, new: true }
  )
    .then(candidateDoc => res.json(candidateDoc))
    .catch(err => next(err));
});

router.post("/signup", (req, res, next) => {
  const { first_name, last_name, email, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    next(new Error("Incorrect password."));
    return; 
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Candidate.create({ first_name, last_name, email, encryptedPassword })
    .then(userDoc => {
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      })
    })
    .catch(err => next(err));
});

// will add put(update) and delete routes later -hw

module.exports = router;
