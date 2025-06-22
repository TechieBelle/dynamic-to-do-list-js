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

    // Check if the input is not empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Set up the click event for removing the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for add button click
  addButton.addEventListener("click", addTask);

  // Event listener for pressing Enter in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
