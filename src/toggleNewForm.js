import todoForm from "./newTodoForm.js";

export default function toggleNewForm() {
    const newTodoForm = document.getElementById('formContainer');
    const todoList = document.getElementById('todoListContainer');

    if (newTodoForm){ 
        todoList.removeChild(newTodoForm);
    } else {
        todoForm();
    }
}