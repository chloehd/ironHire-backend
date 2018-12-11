const express = require("express");
const router = express.Router();
const Association = require("../models/association-model.js");



router.get("/admin", (req, res, next) => {
  if (!req.user || req.user.role !== "admin"){
    // req.flash("error", "Only admins can do that. 🏄🏻‍");
    res.redirect("/");
    return;
  }


  Association.find({verified: {$eq: false}})
  .then(associationResults => {
    res.locals.associationArray = associationResults;
    res.locals.associationVerifNumber = associationResults.length;
   //res.send(associationResults[0].verified)
    // res.render("admin-views/admin-page.hbs"); 
    // do the render when page will be created
  })
  .catch(err => next(err));

});

module.exports = router;