const express = require("express");
const bcrypt = require("bcrypt");
const Jobs = require("../models/job-model.js");
const Candidate = require("../models/candidate-model.js");
const router = express.Router();

// GET all of candidate data 
router.get("/", (req, res, next) => {
  if (req.user.role === "candidate") { 
    Jobs.find()
      .sort({name: 1})
      .then(jobResults => res.json(jobResults))
      .catch(err => next(err));
  } else {
    res.status(401);
    res.send('Permission denied');
  }
});

//GET one job 
router.get("/alljobs/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  
  Jobs.findById(id)
    .then(jobDoc => {res.json(jobDoc)
    console.log("one id thing blah blah", jobDoc);
    })
    .catch(err => next(err));
});

  router.get("/cv", (req, res, next) => {
    Candidate.findById(req.user.id)
      .then(candidateDoc => res.json(candidateDoc))
      .catch(err => next(err));
  })
  

  // router.get("/:id", (req, res, next) => {
  //   const { id } = req.params;
  //   Jobs.findById(id)
  //     // send the query results as a JSON response to the client
  //     .then(jobDoc => res.json(jobDoc))
  //     .catch(err => next(err));
  // });


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
