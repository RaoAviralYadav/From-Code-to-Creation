// To-Do List Application

// Initialize the to-do list array
let todoList = [];

// Application loop
while (true) {
  // Prompt the user for an action
  let action = prompt("WELCOME TO THE TO-DO LIST MAKER!\n\nAvailable actions, only write the name of the action:\n * Add: Add a new task\n * View: View the current to-do list\n * Remove: Remove a task\n * Quit: Exit the application\n\nEnter an action:");

  // Handle the action
  if (action === "Add") {
    // Add a new task
    let newTask = prompt("Enter the task to add:");
    if (newTask) {
      todoList.push(newTask);
      alert("Task added: " + newTask);
    } else {
      alert("Task cannot be empty.");
    }
  } else if (action === "View") {
    // View the to-do list
    if (todoList.length === 0) {
      alert("To-Do List:\n(empty)");
    } else {
      let listString = "To-Do List:\n";
      for (let i = 0; i < todoList.length; i++) {
        listString += "- " + todoList[i] + "\n";
      }
      alert(listString);
    }
  } else if (action === "Remove") {
    // Remove a task
    let taskToRemove = prompt("Enter the task to remove:");
    if (taskToRemove) {
      let removed = false;
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] === taskToRemove) {
          todoList.splice(i, 1);
          alert("Task removed: " + taskToRemove);
          removed = true;
          break; // Exit the loop after removing the task
        }
      }
      if (!removed) {
        alert("Task not found: " + taskToRemove);
      }
    } else {
      alert("Task to remove cannot be empty.");
    }
  } else if (action === "Quit") {
    // Quit the application
    alert("Thank you for using the To-Do List Application!");
    break; // Exit the while loop
  } else {
    // Invalid action
    alert("Invalid action. Please type Add, View, Remove, or Quit.");
  }
}
