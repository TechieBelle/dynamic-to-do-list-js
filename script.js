document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage and display them
  loadTasks();

  // Add task on button click
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  });

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    }
  });

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => {
      addTask(taskText, false); // false = don't save again
    });
  }

  // Function to add task to DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
    // Create li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Handle task removal
    removeButton.onclick = function () {
      taskList.removeChild(li);
      removeFromLocalStorage(taskText);
    };

    // Append button and li
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Save to Local Storage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Function to remove task from Local Storage
  function removeFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
});
