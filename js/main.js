const newTask = document.getElementById("newTask");
const filterTask = document.getElementById("filterTask");

const addTaskButton = document.getElementById("addTaskButton");
const clearListButton = document.getElementById("clearListButton");

const taskList = document.querySelector("ul");

// Load all Event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

  // DOM Load Event
  document.addEventListener('DOMContentLoaded',loadTaskList)
  
  // Add task event
  addTaskButton.addEventListener('click', addTask);

  // Remove task event
  document.body.addEventListener('click', removeTask);

  // clear Task list
  clearListButton.addEventListener('click', clearTaskList);

  // Filter Tasks
  filterTask.addEventListener('keyup', filterTasks);

  // ENTER task
  newTask.addEventListener('keydown', enterTask);
    
}


function enterTask(e){
  if(e.keyCode == 13 ){
    addTask();
  }
}

function addTask() {
    if(newTask.value === ''){

    }
    else {  

      // Create new li element
      const li = document.createElement('li');
      li.className = 'taskListItem'

      li.appendChild(document.createTextNode(newTask.value));
      
      // Add delete icon
      const addDeleteIcon = document.createElement("i")
      addDeleteIcon.className = 'material-icons delete-item';
      addDeleteIcon.appendChild(document.createTextNode('delete'));
      li.appendChild(addDeleteIcon);

      // Add li to ul list
      taskList.appendChild(li);

      // Store data to localy
      storeTaskLocal(newTask.value);
      // Clear input field
      newTask.value='';


    }
}

function removeTask(e) {
  if (e.target.classList.contains('delete-item')) {
    e.target.parentElement.remove();

    // Remove from storage
    removeTaskfromLocalStorage(e.target.parentElement);
  }
}


function removeTaskfromLocalStorage(itemToBeRemoved){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Remove Icon from task
  itemToBeRemoved.lastChild.remove();

  tasks.forEach(function(currentTask, index) {
    if(itemToBeRemoved.textContent === currentTask) {
      tasks.splice(index,1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTaskList(e) {
  if(confirm('Are you sure?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
      clearAllTasksFromLocalStorage()
    }
  }
}


function clearAllTasksFromLocalStorage(){
  localStorage.clear();
}

function filterTasks(e) {
  const filterText = e.target.value.toLowerCase();
  document.querySelectorAll('.taskListItem').forEach(function(task) { 
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(filterText) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function storeTaskLocal(taskValue) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(taskValue);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTaskList() {
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
 
  tasks.forEach(function(task) {
      
    const li = document.createElement('li');
    li.className = 'taskListItem';

    li.appendChild(document.createTextNode(task));
    
    // Add delete icon
    const addDeleteIcon = document.createElement("i");
    addDeleteIcon.className = 'material-icons delete-item';
    addDeleteIcon.appendChild(document.createTextNode('delete'));
    li.appendChild(addDeleteIcon);

    // Add li to ul list
    taskList.appendChild(li);


  }

  ) 
}
