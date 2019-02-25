const express = require("express");
const bcrypt = require("bcrypt");

const Association = require("../models/association-model.js");
const News = require("../models/news-model.js");
const Candidate = require("../models/candidate-model.js");



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



router.get("/", (req, res, next) => {
  News.find()
    .populate("owner")
    .sort({createdAt: -1})
    .limit(30)
    .then(newsResults => res.json(newsResults))
    .catch(err => next(err));


  // Candidate.find({verified: {$eq: false}})
  //   .then(candidateResults => {
  //     res.locals.candidateArray = candidateResults;
  //     res.locals.candidateVerifNumber = candidateResults.length;
  //     res.render("/");
  //   })
  //   .catch(err => next(err));
});


router.post("/", (req, res, next) => {
  const { message, image, link } = req.body;

  News.create({ message, image, link, owner: req.user })
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
});


// router.get("/", (req, res, next) => {

// const {candidateId} = req.params;

//   Candidate.findByIdAndUpdate(
//     candidateId,
//     {$set:{verified: true}},
//     { runValidators: true })
//     .then(candidateResults => {
//       console.log(candidateResults);
//       res.locals.candidateArray = candidateResults;
//       res.locals.candidateVerifNumber = candidateResults.length;
//       res.redirect("/");
//     })
//     .catch(err => next(err));

// });


router.get("/all", (req, res, next) => {
  Association.find()
    .then(assoResults => res.json(assoResults))
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  News.findById(id)
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
});


router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  
  News.findByIdAndRemove(id)
    .then(newsDoc => res.json(newsDoc))
    .catch(err => next(err));
})



router.get("/all/:id", (req, res, next) => {
  const { id } = req.params;
  Association.findById(id)
    .then(assoDoc => {
      res.json(assoDoc)
    })
    .catch(err => next(err));
});

router.put("/change-profile", (req, res, next) => {
  const { associationLogo, name, createdOn, description, addInformation,
    email, telNumber } = req.body;
  Association.findByIdAndUpdate(
    req.user._id,
    {$set: {associationLogo, name, createdOn, description, addInformation,
      email, telNumber}},
    { runValidators: true, new: true },
  )
  .then(assoDoc => res.json(assoDoc))
  .catch(err => next(err));
});



module.exports = router;