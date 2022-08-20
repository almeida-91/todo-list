import createTodoListContainer from "./createTodoListContainer.js";
import { markComplete, removeTask, seeDetails } from "./detailsRemoveFunctions.js";
import {todoList} from "./index.js";
import todoForm from "./newTodoForm.js";
import renderSidebar from "./renderSidebar.js";
import toggleNewForm from "./toggleNewForm.js";

export default function renderTodoList(project) {
    const content = document.getElementById('content');
    
    // Create the Task List container
    renderSidebar();
    //todoForm();

    if (project.length == 0) return;

    let todoListContainer = document.getElementById('todoListContainer');
    if (!(todoListContainer)){
        todoListContainer = document.createElement('div');
    }

    todoListContainer.innerHTML = '';
    todoListContainer.id= 'todoListContainer';

    const taskTable = document.createElement('table');
    const tableTopRow = document.createElement('tr');
    const title = document.createElement('td');
    const description = document.createElement('td');
    const duedate = document.createElement('td');
    const prio = document.createElement('td');
    const notes = document.createElement('td');
    const actions = document.createElement('td');
    const complete = document.createElement('td');

    taskTable.classList.add('table');

    title.innerHTML = 'Task';
    description.innerHTML = 'Description';
    duedate.innerHTML = 'Due date';
    prio.innerHTML = 'Priority';
    notes.innerHTML = 'Notes';
    actions.innerHTML = 'Actions';
    complete.innerHTML = 'Complete';


    tableTopRow.appendChild(title);
    tableTopRow.appendChild(duedate);
    tableTopRow.appendChild(actions);
    tableTopRow.appendChild(complete);
    
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
        let newTaskCheckComplete = document.createElement('td');

        details.innerHTML = '+';
        remove.innerHTML = 'x';

        newTaskTitle.textContent = `${project.todoList[i].title}`;
        newTaskDescription.textContent = `${project.todoList[i].description}`;
        newTaskdueDate.textContent = `${project.todoList[i].dueDate}`;
        newTaskPrio.textContent = `${project.todoList[i].priority}`;
        newTaskNotes.textContent = `${project.todoList[i].notes}`;
        let checkComplete = document.createElement('input');
        checkComplete.setAttribute("type","checkbox");
        newTaskCheckComplete.appendChild(checkComplete);

        if (project.todoList[i].complete == true) {
            checkComplete.checked = true;
            newTask.style.textDecoration = 'line-through';
            newTask.style.color = '#2563eb';
            newTask.style.backgroundColor = '#7dd3fc';
            newTask.style.border = '1px solid #2563eb';
            details.style.backgroundColor = '#7dd3fc';
            remove.style.backgroundColor = '#7dd3fc';
            details.style.color = '#2563eb';
            remove.style.color = '#2563eb';
        }

        checkComplete.addEventListener('click',()=>{ 
            markComplete(project,i);
        });

        details.addEventListener('click', () => seeDetails(project,i));
        remove.addEventListener('click',()=> removeTask(project,i));

        newTaskActions.appendChild(details);
        newTaskActions.appendChild(remove);

        newTask.appendChild(newTaskTitle);
        newTask.appendChild(newTaskdueDate);
        newTask.appendChild(newTaskActions);
        newTask.appendChild(newTaskCheckComplete);

        if (newTaskPrio.textContent == 'High' && !(project.todoList[i].complete)){
            newTask.style.color = '#dc2626';
            newTask.style.border = '2px solid #dc2626';
            newTask.style.backgroundColor = '#fecaca';
        } else if (newTaskPrio.textContent == 'Medium' && !(project.todoList[i].complete)){
            newTask.style.backgroundColor = '#fef9c3';
            newTask.style.color = '#eab308'
            newTask.style.border = '2px solid #eab308';
        } else if (newTaskPrio.textContent == 'Low' && !(project.todoList[i].complete)){
            newTask.style.backgroundColor = '#bbf7d0';
            newTask.style.color = '#16a34a'
            newTask.style.border = '2px solid #16a34a';
        }
    

        taskTable.appendChild(newTask);
    }
    todoListContainer.appendChild(taskTable);

    const newTaskbutton = document.createElement('button');
    newTaskbutton.textContent = 'Add new task';
    newTaskbutton.classList.add('newTaskbutton');
    newTaskbutton.addEventListener('click',toggleNewForm);

    todoListContainer.appendChild(newTaskbutton);

    content.appendChild(todoListContainer);
}