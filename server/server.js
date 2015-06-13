const express = require("express");
const bodyParser = require("body-parser");
const tasks = require("./tasks_web");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

tasks.init(app);

app.get('*', (req, res) => {
  res.sendFile("public/index.html", {"root": __dirname + "../public/"});
});

app.listen(3000);
