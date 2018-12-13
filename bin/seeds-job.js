require('dotenv').config();

const mongoose = require("mongoose");
const Job = require("../models/job-model.js");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const jobData = [{name: "Assembly Technician",
salary: 25000,
description: "The Assembly Technician works under direct supervision and typically in partnership with an Assembly Technician II or above. Incumbent will assemble and package mattresses and related material manually by performing repetitive line assembly operations to safely mass produce quality mattresses.",
contractType: "Permanant",
location: "Paris France",
createdAt: new Date("November 1, 2018"),
deadline: new Date("December 20, 2018") },

{name: "Administrative Assistant",
description: "The Administrative Assistant is there to provide clerical and organizational support to the Western region by meeting the administrative needs and goals related to the JNF Campaign. This position will be based in the Van Nuys, CA JNF office and will report to the Director, Western COE",
contractType: "Permanent",
location: "Paris, France",
createdAt: new Date("December 4, 2018"),
deadline: new Date("January 15, 2019") } ,

{name: "Program Assistant",
description: "Program Assistant to support our Program Team as we bring a moral voice and the power of the Jewish community to protecting and advancing the cause of human rights. This highly-organized administrator will take initiative and assume ownership of projects, mastering existing systems and creating new ones to ensure the smooth implementation of our programs.",
contractType: "Permanent",
location: "Paris, France",
createdAt: new Date("December 7, 2018"),
deadline: new Date("January 24, 2019") } ,

{name: "Contract Designer",
description: "Build presentation material, design logo concepts based on brand strategy, design print materials and packaging based on an established brand language, or help to create that brand language. Design UI/UX with an eye for animation and movement. You must know how to inspire our clients and your team. Understand business strategy and bring it to execution. Work with little process in place. We live in world of problem-solving real time and being proactive",
contractType: "Permanent",
location: "Paris, France",
createdAt: new Date("December 1, 2018"),
deadline: new Date("December 23, 2018") } ,

{name: "Junior Front-End Developer",
description: "Knowledge in JavaScript, REACT, Express, Angular, Node.js, MongoDB, HTML & CSS. Working knowledge in other languages a plus." ,
contractType: "Contract",
location: "Remote",
createdAt: new Date("December 10, 2018"),
deadline: new Date("January 3, 2019") } ,

{name: "Teacher Assistant",
description: "The Teacher’s Aide shares responsibility with the Assistant Teacher in implementing the pre-school instructional program and supporting students in activities planned by the classroom's Head Teacher.",
contractType: "Contract",
location: "Paris, France",
createdAt: new Date("December 1, 2018"),
deadline: new Date("December 23, 2018") } ,]


Job.create(jobData)
  .then(jobdata => {
    console.log(`inserted ${jobdata.length} wohoo recipes!🌮 `);
  })
  .catch(err => {
    console.log("created failure", err);
  });
