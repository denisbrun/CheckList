const newTask = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.querySelector("ul");


// Load all Event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

  // Add task event
  addTaskButton.addEventListener('click', addTask);

  // Remove task event
  document.body.addEventListener('click', removeTask)
    
}


function addTask() {
    if(newTask.value === ''){

    }
    else {  

      // Create new li element
      const li = document.createElement('li');
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
