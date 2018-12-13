require("dotenv").config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require("cors");
const session      = require("express-session");
const MongoStore   = require("connect-mongo")(session);
const passport     = require("passport");


require("./config/passport-setup.js");

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000"]
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));
app.use(passport.initialize());
app.use(passport.session());

const adminRouter = require("./routes/admin-router.js");
app.use("/", adminRouter);

const index = require("./routes/index.js");
app.use("/api", index);

const assoRouter = require("./routes/association-router.js");
app.use("/api/association", assoRouter);

const recruitRouter = require("./routes/recruiter-router.js");
app.use("/api/recruiter", recruitRouter);

const candidateRouter = require("./routes/candidate-router.js");
app.use("/api/candidate", candidateRouter);

const fileUpload = require("./routes/files-router.js");
app.use("/api/upload-file", fileUpload);



module.exports = app;