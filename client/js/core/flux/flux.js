import {Flummox} from "flummox";
import TasksStore from "../../tasks/tasksstore";
import TasksActions from "../../tasks/tasksactions";

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions("tasks", TasksActions);
    this.createStore("tasks", TasksStore, this);
  }
}

const flux = new Flux();

export default flux;
