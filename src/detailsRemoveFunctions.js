import { todoList } from "./index.js";
import renderSidebar from "./renderSidebar.js";
import renderTodoList from "./renderTodoList.js";

export function seeDetails(project,index){
    const content = document.getElementById('content');
    content.innerHTML = '';
    renderSidebar();
    
    let task = project.todoList[index];
    const taskDetails = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskDescription = document.createElement('p');
    const taskdueDate = document.createElement('p');
    const taskPriority = document.createElement('p');
    const taskNotes = document.createElement('p');
    const backButton = document.createElement('button');

    taskTitle.textContent = `Task: ${project.todoList[index].title}`;
    taskDescription.textContent = `Description: ${project.todoList[index].description}`;
    taskdueDate.textContent = `Due date: ${project.todoList[index].dueDate}`;
    taskPriority.textContent = `Priority: ${project.todoList[index].priority}`;
    taskNotes.textContent = `Notes: ${project.todoList[index].notes}`;
    backButton.textContent = 'See tasklist';

    backButton.addEventListener('click', ()=>{renderTodoList(todoList)});

    taskDetails.appendChild(taskTitle);
    taskDetails.appendChild(taskDescription);
    taskDetails.appendChild(taskdueDate);
    taskDetails.appendChild(taskPriority);
    taskDetails.appendChild(taskNotes);
    taskDetails.appendChild(backButton);

    content.appendChild(taskDetails);
}

export function removeTask(index){
    project.todoList.splice(index,1);
    renderTodoList();
}