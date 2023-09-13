const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const tasks = [];
let taskIdCounter = 1;

const addData = require("./routes/add")(tasks, taskIdCounter);
const clearData = require("./routes/clear")(tasks);
const completeData = require("./routes/complete")(tasks);
const indexData = require("./routes/index")(tasks);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use(addData);
app.use(clearData);
app.use(completeData);
app.use(indexData);

app.listen(3000);
