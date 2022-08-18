import { projects, todoList } from "./index.js";
import renderSidebar from "./renderSidebar.js";
import renderTodoList from "./renderTodoList.js";
import { differenceInCalendarDays, format, parse, parseISO } from 'date-fns';
import { newProject } from "./newTodoItem.js";



export function seeDetails(project,index){
    const content = document.getElementById('content');
    content.innerHTML = '';
    renderSidebar();
    todoList = project;

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

export function removeTask(project,index){
    //project.todoList.splice(index,1);
    
    for (let i = 0 ; i < projects.length ; i++) {
        for(let j = 0 ; j < projects[i].todoList.length ; j++){
            if(project.todoList[index].title == projects[i].todoList[j].title
            && project.todoList[index].dueDate == projects[i].todoList[j].dueDate){
                projects[i].todoList.splice(j,1);
            }
        }
    }
    save();
    renderTodoList(todoList);
}

export function save(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function removeEmptyProject(){
    for (let i = 0 ; i < projects.length ; i++){
        if (projects[i].todoList.length == 0){
            projects.splice(i,1);
        }
    }
}

export function checkWeeklyTasks(){
    let weeklyProject = new newProject('weekly', todoList);
    weeklyProject.todoList = [];
    for (let i = 0 ; i < projects.length ; i++ ){
        for (let j = 0 ; j < projects[i].todoList.length ; j++){
            let taskdueDate = parse(projects[i].todoList[j].dueDate, 'dd-MM-yy', new Date());
            if ( differenceInCalendarDays(new Date(),taskdueDate) <= 7 ){
                console.log(weeklyProject.todoList);
                console.log(weeklyProject);
                weeklyProject.todoList.push(projects[i].todoList[j]);
            }
        }
    }
    renderTodoList(weeklyProject);
}

export function checkDailyTasks(){
    let dailyProject = new newProject('daily', todoList);
    dailyProject.todoList = [];
    for (let i = 0 ; i < projects.length ; i++ ){
        for (let j = 0 ; j < projects[i].todoList.length ; j++){
            let taskdueDate = parse(projects[i].todoList[j].dueDate, 'dd-MM-yy', new Date());
            if ( differenceInCalendarDays(new Date(),taskdueDate) == 0 ){
                dailyProject.todoList.push(projects[i].todoList[j]);
            }
        }
    }
    renderTodoList(dailyProject);
}