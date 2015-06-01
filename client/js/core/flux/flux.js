const Flummox = require("flummox").Flummox;
const TasksStore = require("../../tasks/tasksstore");
const TasksActions = require("../../tasks/tasksactions");

class Flux extends Flummox {
  constructor() {
    super();

    console.log(TasksActions, TasksStore);

    this.createActions("tasks", TasksActions);
    this.createStore("tasks", TasksStore, this);
  }
}

const flux = new Flux();

exports.flux = flux;
