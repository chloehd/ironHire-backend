const express = require("express");
const bcrypt = require("bcrypt");

const Recruiter = require("../models/recruiter-model.js");
const Jobs = require("../models/job-model.js");

const router = express.Router();



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