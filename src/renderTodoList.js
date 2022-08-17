import createTodoListContainer from "./createTodoListContainer.js";
import { removeTask, seeDetails } from "./detailsRemoveFunctions.js";
import {todoList} from "./index.js";
import todoForm from "./newTodoForm.js";
import renderSidebar from "./renderSidebar.js";

export default function renderTodoList(project) {
    const content = document.getElementById('content');
    
    // Create the Task List container
    renderSidebar();
    todoForm();

    const todoListContainer = document.getElementById('todoListContainer');
    if (!(todoListContainer)){
        todoListContainer = document.createElement('div');
    }

    todoListContainer.innerHTML = '';
    todoListContainer.classList.add('todoListContainer');

    const taskTable = document.createElement('table');
    const tableTopRow = document.createElement('tr');
    const title = document.createElement('td');
    const description = document.createElement('td');
    const duedate = document.createElement('td');
    const prio = document.createElement('td');
    const notes = document.createElement('td');
    const actions = document.createElement('td');

    taskTable.classList.add('table');

    title.innerHTML = 'Task';
    description.innerHTML = 'Description';
    duedate.innerHTML = 'Due date';
    prio.innerHTML = 'Priority';
    notes.innerHTML = 'Notes';
    actions.innerHTML = 'Actions';

    tableTopRow.appendChild(title);
    tableTopRow.appendChild(duedate);
    tableTopRow.appendChild(actions);
    taskTable.appendChild(tableTopRow);
    todoListContainer.appendChild(taskTable);

    tableTopRow.classList.add('tablerow');

    // Add Task List to its container
    for (let i = 0 ; i < project.todoList.length ; i++ ){
        let newTask = document.createElement('tr');
        let newTaskTitle = document.createElement('td');
        let newTaskDescription = document.createElement('td');
        let newTaskdueDate = document.createElement('td');
        let newTaskPrio = document.createElement('td');
        let newTaskNotes = document.createElement('td');
        let newTaskActions = document.createElement('td');
        let details = document.createElement('button');
        let remove = document.createElement('button');

        details.innerHTML = '+';
        remove.innerHTML = 'x';

        newTaskTitle.textContent = `${project.todoList[i].title}`;
        newTaskDescription.textContent = `${project.todoList[i].description}`;
        newTaskdueDate.textContent = `${project.todoList[i].dueDate}`;
        newTaskPrio.textContent = `${project.todoList[i].priority}`;
        newTaskNotes.textContent = `${project.todoList[i].notes}`;
        
        details.addEventListener('click', () => seeDetails(project,i));
        remove.addEventListener('click',()=> removeTask(project,i));

        newTaskActions.appendChild(details);
        newTaskActions.appendChild(remove);

        newTask.appendChild(newTaskTitle);
        newTask.appendChild(newTaskdueDate);
        newTask.appendChild(newTaskActions);

        if (newTaskPrio.textContent == 'High'){
            newTask.style.backgroundColor = 'red';
        } else if (newTaskPrio.textContent == 'Medium'){
            newTask.style.backgroundColor = 'yellow';
        } else {
            newTask.style.backgroundColor = 'green';
        }

        taskTable.appendChild(newTask);
    }
    todoListContainer.appendChild(taskTable);
    content.appendChild(todoListContainer);
}