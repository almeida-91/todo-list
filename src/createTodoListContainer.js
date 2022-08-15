export default function createTodoListContainer() {
    const content = document.getElementById('content');
    const todoListContainer = document.createElement('div');

    todoListContainer.id = 'todoListContainer'; 
    content.appendChild(todoListContainer);
}