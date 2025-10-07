let tasks = [];

function createTask(text) {
  return {
    id: Date.now().toString(),
    text,
    done: false
  };
}

function addTaskToList(task) {
  tasks.push(task);
}




