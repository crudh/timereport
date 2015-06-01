getTasks() {
  return fetch("/services/tasks");
}

exports.getTasks = getTasks;
