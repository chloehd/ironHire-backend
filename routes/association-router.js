const express = require("express");
const bcrypt = require("bcrypt");

const Association = require("../models/association-model.js");

const router = express.Router();



router.post("/signup", (req, res, next) => {
  const { name, createdOn, description, email, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    next(new Error("Incorrect password."));
    return; 
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Association.create({ name, createdOn, description, email, encryptedPassword })
    .then(assoDoc => {
      req.logIn(assoDoc, () => {
        assoDoc.encryptedPassword = undefined;
        res.json({ assoDoc });
      })
    })
    .catch(err => next(err));
});


router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  Association.findOne({ email: { $eq: email } })
    .then(assoDoc => {
      if (!assoDoc) {
        next(new Error("Incorrect email. 🤦🏼‍♀️"))        
        return; 
      }

      const { encryptedPassword } = assoDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
          next(new Error("Incorrect password. 🙅🏽‍♀️ "));
      }
      else {
        req.logIn( assoDoc, () => {
          assoDoc.encryptedPassword = undefined;
          res.json({ assoDoc });
        });
      }
    })
    .catch(err => next(err));
});

router.delete("/logout", (req, res, next) => {
  req.logout();
  res.json({ assoDoc: null });
});

router.get("/checkuser", (req, res, next) => {
  if (req.user) {
    req.user.encryptedPassword = undefined;
    res.json({ assoDoc: req.user });
  }
  else {
    res.json({ assoDoc: null });
  }
});


module.exports = router;
