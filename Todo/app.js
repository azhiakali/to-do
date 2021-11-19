document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");

  
    todoForm.addEventListener("submit", function(e) {
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "clear";

      let editTodo = document.createElement("button");
      editTodo.innerText = "Edit";
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("todo");
  
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeButton);
      newTodo.appendChild(editTodo);
  
      todoForm.reset();
    });
  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });

