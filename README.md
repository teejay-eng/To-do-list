
## `TO DO LIST'

#  Simple To-Do List App

This is a simple yet elegant web-based To-Do List application built using **HTML**, **CSS**, and **JavaScript**. It allows users to add tasks with a title and due date/time, mark them as done, and delete them from the list.

---

---

## Features

- Add tasks with a name and a due date/time
- Mark tasks as done / undo them
- Delete tasks from the list
- Automatically updates the UI after every action
- Visually styled cards for each task
- Responsive, modern design using pure CSS

---

##  Project Structure

```

to-do-app/
│
├── index.html         
├── css/
│   └── style.css     
├── app.js             
└── README.md          

````

---

## How to Run

1. **Clone or download** this repository to your local machine.

2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.).


---


## How It Works

- **Tasks are stored** in a JavaScript array called `tasks`.
- Each task is an object with:
  ```js
  {
    id: Number,         
    activity: String,   
    time: String,       
    isDone: Boolean     
  }



* Buttons call `markTaskAsDone()` and `deleteTask()` using inline `onclick`.



## Styling

* CSS uses modern layout techniques
* Tasks are styled as **cards** with:

    * Colored status indication (done / not done)
    * Subtle shadows and transitions
    * Responsive layout for readability on all screen sizes

---
