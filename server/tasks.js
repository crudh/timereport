const tasks = {
};

function getTasks() {
  return tasks;
}

function addTask(name) {
  if (tasks[name]) return;

  tasks[name] = {};
}

exports.getTasks = getTasks;
exports.addTask = addTask;
