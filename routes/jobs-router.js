const express = require("express");
const bcrypt = require("bcrypt");
const Jobs = require("../models/job-model.js");
const router = express.Router();

// GET all of candidate data 
router.get("/alljobs", (req, res, next) => {
    Jobs.find()
      .then(jobResults => res.json(jobResults))
      .catch(err => next(err));
  });
  

  module.exports = router;
  