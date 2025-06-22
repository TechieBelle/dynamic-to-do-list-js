// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Show empty state initially
  showEmptyState();

  // Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task!");
      taskInput.focus();
      return;
    }

    // Remove empty state if it exists
    removeEmptyState();

    // Create a new li element
    const li = document.createElement("li");

    // Create task text span
    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      // Add removal animation
      li.style.animation = "taskSlideOut 0.3s ease-in forwards";

      setTimeout(() => {
        taskList.removeChild(li);
        // Show empty state if no tasks remain
        if (taskList.children.length === 0) {
          showEmptyState();
        }
      }, 300);
    };

    // Append elements
    li.appendChild(taskSpan);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
    taskInput.focus();
  }

  // Function to show empty state
  function showEmptyState() {
    if (taskList.children.length === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "empty-state";
      emptyDiv.innerHTML = "📝 No tasks yet!<br>Add your first task above.";
      taskList.appendChild(emptyDiv);
    }
  }

  // Function to remove empty state
  function removeEmptyState() {
    const emptyState = taskList.querySelector(".empty-state");
    if (emptyState) {
      taskList.removeChild(emptyState);
    }
  }

  // Attach Event Listeners
  // Add event listener to addButton
  addButton.addEventListener("click", addTask);

  // Add event listener to taskInput for 'keypress' event
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Focus on input field when page loads
  taskInput.focus();
});

// Add CSS animation for task removal
const style = document.createElement("style");
style.textContent = `
    @keyframes taskSlideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-100%);
        }
    }
`;
document.head.appendChild(style);
