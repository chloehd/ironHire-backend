// const express = require("express");
// const bcrpyt = require("bcrypt");

// const router = express.Router();

// router.post("/signup", (req, res, next) => {
// const { fullName, email, originalPassword } = req.body;

// if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
//   next(new Error("Password can't be blank and must contain a number"));
//   return;
// }

// const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

// User.create({ fullName, email, encryptedPassword })
//     .then(userDoc => {
//         req.logIn(userDoc, () => {
//             res.json({ userDoc });
//         });
//     })
//     .catch(err => next(err)); 
// )};

// router.post("/login", req, res, next) => {
//     const { email, originalPassword } = req.body;

