const express = require("express");
const bcrypt = require("bcrypt");

const Candidate = require("../models/cv-model.js");

const router = express.Router();



router.post("/signup", (req, res, next) => {
  const { firstName, lastName, email, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    next(new Error("Incorrect password."));
    return; 
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Candidate.create({ firstName, lastName, email, encryptedPassword })
    .then(candidateDoc => {
      req.logIn(candidateDoc, () => {
        candidateDoc.encryptedPassword = undefined;
        res.json({ candidateDoc });
      })
    })
    .catch(err => next(err));
});


router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  Candidate.findOne({ email: { $eq: email } })
    .then(userDoc => {
      if (!userDoc) {
        next(new Error("Incorrect email. 🗑"))        
        return; 
      }

      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
          next(new Error("Incorrect password. 🍫 "));
      }
      else {
        req.logIn( userDoc, () => {
          userDoc.encryptedPassword = undefined;
          res.json({ userDoc });
        });
      }
    })
    .catch(err => next(err));
});


module.exports = router;
