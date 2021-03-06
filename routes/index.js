const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const AssoUser = require("../models/association-model.js");
const RecruitUser = require("../models/recruiter-model.js");
const CandidateUser = require("../models/candidate-model.js");


router.get("/checkuser", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  }
  else {
    res.json({ userDoc: null });
  }
});


router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  AssoUser.findOne({ email: { $eq: email } })
    .then(userDoc => {
      
      if (userDoc) {
        const { encryptedPassword } = userDoc;
        if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
          next(new Error("Incorrect password"));
        } else {
          req.logIn(userDoc, () => {
            userDoc.encryptedPassword = undefined;
            res.json({ userDoc });
          });
        }
      } else {
        CandidateUser.findOne({ email: { $eq: email } })
          .then(userDoc => {
            if (userDoc) {
              const { encryptedPassword } = userDoc;
              if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
                next(new Error("Incorrect password"));
              }
              else {
                req.logIn(userDoc, () => {
                  userDoc.encryptedPassword = undefined;
                  res.json({ userDoc });
                });
              }
            } else {
              RecruitUser.findOne({ email: { $eq: email } })
                .then(userDoc => {
                  if (!userDoc) {
                    next(new Error("Incorrect email"))
                    return;
                    }
                    
                  const { encryptedPassword } = userDoc;
                  if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
                    next(new Error("Incorrect password"));
                  } else {
                    req.logIn(userDoc, () => {
                      userDoc.encryptedPassword = undefined;
                      res.json({ userDoc });
                    });
                  }
                })
                .catch(err => next(err));
            }})
          .catch(err => next(err));
      }})
      .catch(err => next(err));
    });

router.delete("/logout", (req, res, next) => {
  req.logout();
  res.json({ userDoc: null });
});


module.exports = router;
