const express = require("express");
const services = require("./services_web");

const app = express();
app.use(express.static("public"));

services.init(app);

app.listen(3000);
