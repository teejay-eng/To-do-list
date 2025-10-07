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

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';
    li.innerHTML = `

    <span>${task.text}</span>

      <div class="task-buttons">
        <button onclick="handleToggle('${task.id}')">${task.done ? 'Undo' : 'Done'}</button>
        <button onclick="handleRemove('${task.id}')">Delete</button>
      </div>




