import {todoList} from "./index.js";

export default function renderTodoList() {
    const content = document.getElementById('content');
    
    // Create the Task List container
    const todoListContainer = document.getElementById('todoListContainer');
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
    //tableTopRow.appendChild(description);
    tableTopRow.appendChild(duedate);
    //tableTopRow.appendChild(prio);
    //tableTopRow.appendChild(notes);
    tableTopRow.appendChild(actions);
    taskTable.appendChild(tableTopRow);
    todoListContainer.appendChild(taskTable);

    tableTopRow.classList.add('tablerow');

    // Add Task List to its container
    for (let i = 0 ; i < todoList.length ; i++ ){
        let newTask = document.createElement('tr');
        let newTaskTitle = document.createElement('td');
        let newTaskDescription = document.createElement('td');
        let newTaskdueDate = document.createElement('td');
        let newTaskPrio = document.createElement('td');
        let newTaskNotes = document.createElement('td');
        let newTaskActions = document.createElement('td');

        newTaskTitle.innerHTML = `${todoList[i].title}`;
        newTaskDescription.innerHTML = `${todoList[i].description}`;
        newTaskdueDate.innerHTML = `${todoList[i].dueDate}`;
        newTaskPrio.innerHTML = `${todoList[i].priority}`;
        newTaskNotes.innerHTML = `${todoList[i].notes}`;
        newTaskActions.innerHTML = `Delete`;

        newTask.appendChild(newTaskTitle);
        //newTask.appendChild(newTaskDescription);
        newTask.appendChild(newTaskdueDate);
        //newTask.appendChild(newTaskPrio);
        //newTask.appendChild(newTaskNotes);
        newTask.appendChild(newTaskActions);

        taskTable.appendChild(newTask);
    }
    todoListContainer.appendChild(taskTable);
    content.appendChild(todoListContainer);
}