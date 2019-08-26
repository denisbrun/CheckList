const newTask = document.getElementById("newTask");
const filterTask = document.getElementById("filterTask");

const addTaskButton = document.getElementById("addTaskButton");
const clearListButton = document.getElementById("clearListButton");

const taskList = document.querySelector("ul");

// Load all Event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

  // Add task event
  addTaskButton.addEventListener('click', addTask);

  // Remove task event
  document.body.addEventListener('click', removeTask);

  // clear Task list
  clearListButton.addEventListener('click', clearTaskList);

  // Filter Tasks
  filterTask.addEventListener('keyup', filterTasks)
    
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
      newTask.value='';
    }
}

function removeTask(e) {
  if (e.target.classList.contains('delete-item')) {
    e.target.parentElement.remove();
  }
}


function clearTaskList(e) {
  if(confirm('Are you sure?')){
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild)
    }
  }
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