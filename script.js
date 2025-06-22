// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a new remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn"); // Use classList.add

    // Assign onclick event to remove the li element
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li
    li.appendChild(removeButton);

    // Append the li to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach event listener to the Add Task button
  addButton.addEventListener("click", addTask);

  // Attach event listener to allow adding task with Enter key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
