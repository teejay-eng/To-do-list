
//Task
// {
//     activity
//     time,
// done,
//
// }

let tasks = [];

// createTask
// deleteTask
// markingTaskDone
// updateUI


function addTask(){
    let titleInput = document.getElementById('taskInput');
    let title = titleInput.value;


    let dateInput = document.getElementById('taskTime');
    let date = dateInput.value;

    createTask(title, date);

}

function createTask(title, time) {

    let task = {
        id : Date.now(),
        activity: title,
        time: time,
        isDone: false
    }
    tasks.push(task);
    updateUI();

}

function deleteTask(id) {
    for (let t of tasks) {
        if(t.id  === id) {
            delete tasks[t];
        }
    }
    updateUI();
}


function markTaskAsDone(id){
    for (let t of tasks) {
        if(t.id  === id) {
            t.isDone = !t.isDone;
        }
    }
    updateUI();
}



function updateUI() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';
    li.innerHTML = `

    <span>${task.activity}</span>

      <div class="task-buttons">
        <button onclick="markTaskAsDone('${task.id}')">${task.done ? 'Undo' : 'Done'}</button>
        <button onclick="deleteTask('${task.id}')">Delete</button>
      </div>
      `;
    list.appendChild(li);
  });
}
