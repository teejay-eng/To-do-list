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

function toggleTask(id) {

  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
  }
}

function removeTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}




