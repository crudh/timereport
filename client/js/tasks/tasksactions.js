const Flummox = require("flummox");
const Actions = Flummox.Actions;

class TasksActions extends Actions {
  addTask(content) {
    return content;
  }
}

exports.TasksActions = TasksActions;
