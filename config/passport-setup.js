const passport = require("passport");

const UserAsso = require("../models/association-model.js");
const UserCandidate = require('../models/cv-model.js');
const UserRecruiter = require("../models/recruiter-model.js");

passport.serializeUser((userDoc, done) => {
  console.log("SERIALIZE (save user ID to session) 🐋");

  done(null, userDoc._id);
});

passport.deserializeUser((userId, done) => {
  console.log("DESERIALIZE (retrieving user info from the DB) 🐓");

  UserAsso.findById(userId)
    .then(userDoc => {
      if(userDoc){
        done(null, userDoc);
      }
      else {
        UserCandidate.findById(userId)
        .then(userDoc => {
          if(userDoc) {
            done(null, userDoc);
          }
          else {
            UserRecruiter.findById(userId)
            .then(userDoc => {
              done(null, userDoc);
            })
            .catch(err => done(err));
          }
        })
        .catch(err => done(err));
      }
    })
    .catch(err => done(err));
});
