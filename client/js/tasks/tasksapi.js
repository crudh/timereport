function getTasks() {
  return fetch("/services/tasks");
}

export default getTasks;
