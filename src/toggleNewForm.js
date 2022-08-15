import todoForm from "./newTodoForm.js";

export default function toggleNewForm() {
    const newTodoForm = document.getElementById('formContainer');
    const todoList = document.getElementById('todoListContainer');
    const content = document.getElementById('content');
    console.log(newTodoForm);
    if (newTodoForm){ 
        content.removeChild(newTodoForm);
        todoList.style.gridRow = 'span 2';
    } else {
        todoForm();
        todoList.style.gridRow = 'span 1';
    }
}