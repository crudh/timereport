const tasks = require("./tasks");

const init = app => {
  app.get("/services/tasks", (req, res) => {
    res.send(tasks.getTasks());
  });

  app.post("/services/tasks", (req, res) => {
    const name = req.body.name;
    tasks.addTask(name);

    res.sendStatus(200);
  });
};

exports.init = init;
