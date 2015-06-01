const Flummox = require("flummox");
const Store = Flummox.Store;

class TasksStore extends Store {
  constructor(flux) {
    super();

    const tasksActions = flux.getActions("tasks");
    this.register(tasksActions.addTask, this.addTask);

    this.state = {};
  }

  addTask(content) {
    console.log("ADD TASK");
  }
}

module.exports = TasksStore;
