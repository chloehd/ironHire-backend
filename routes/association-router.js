const express = require("express");
const bcrypt = require("bcrypt");

const Association = require("../models/association-model.js");
const News = require("../models/news-model.js");



const router = express.Router();



router.post("/signup", (req, res, next) => {
  const { name, createdOn, description, email, originalPassword } = req.body;

  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    next(new Error("Incorrect password."));
    return; 
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  Association.create({ name, createdOn, description, email, encryptedPassword })
    .then(userDoc => {
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      })
    })
    .catch(err => next(err));
});


router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  Association.findOne({ email: { $eq: email } })
    .then(userDoc => {
      if (!userDoc) {
        next(new Error("Incorrect email. 🤦🏼‍♀️"))        
        return; 
      }

      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
          next(new Error("Incorrect password. 🙅🏽‍♀️ "));
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



router.get("/news", (req, res, next) => {
  News.find()
    .populate("owner")
    .sort({createdAt: -1})
    .limit(30)
    .then(newsResults => res.json(newsResults))
    .catch(err => next(err));
});


router.post("/news", (req, res, next) => {
  const { message, image, link } = req.body;

  News.create({ message, image, link, owner: req.user._id })
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
})

router.get("/news/:id", (req, res, next) => {
  const { id } = req.params;
  News.findById(id)
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
});


router.delete("/news/:id", (req, res, next) => {
  const { id } = req.params;
  
  News.findByIdAndRemove(id)
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
})


router.get("/all", (req, res, next) => {
  Association.find()
    .then(assoResults => res.json(assoResults))
    .catch(err => next(err));
});



router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Association.findByIdAndUpdate(id)
    .then(assoDoc => res.json(assoDoc))
    .catch(err => next(err));
});





module.exports = router;
