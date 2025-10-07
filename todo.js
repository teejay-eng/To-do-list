function assertEquals(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error(`❌ ${message}\nExpected: ${JSON.stringify(expected)}\nActual: ${JSON.stringify(actual)}`);
  } else {
    console.log(`✅ ${message}`);
  }
}

function runTests() {

    tasks = [];

    const task = createTask('Test Task');
  assertEquals(task.text, 'Test Task', 'createTask sets correct text');
  assertEquals(task.done, false, 'createTask initializes with done=false');

   addTaskToList(task);
  assertEquals(tasks.length, 1, 'Task added to list');

  toggleTask(task.id);
  assertEquals(tasks[0].done, true, 'toggleTask marks task as done');

  toggleTask(task.id);
  assertEquals(tasks[0].done, false, 'toggleTask marks task as not done');

    removeTask(task.id);
  assertEquals(tasks.length, 0, 'Task removed successfully');
