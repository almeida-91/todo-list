import { save } from "./detailsRemoveFunctions.js";
import { projects, todoList } from "./index.js";
import todoForm from "./newTodoForm.js";
import newTodoItem, { newProject } from "./newTodoItem";
import renderSidebar from "./renderSidebar.js";
import renderTodoList from "./renderTodoList.js";

export default function addTask
(project,task,description,dueDate,prio,notes) {
    let newTask = newTodoItem(task,description,dueDate,prio,notes);
    for (let i = 0 ; i < projects.length ; i++){
        if (projects[i].title == project){
            projects[i].todoList.push(newTask);
            console.log(projects[i].todoList);
            renderSidebar();
            todoForm();
            renderTodoList(projects[i]);
            todoList = projects[i];
            return;
        }
    }
    let newproject = newProject(project,[]);
    newproject.todoList.push(newTask);
    console.log(newproject.todoList);
    projects.push(newproject);
    save();
    renderSidebar();
    todoForm();    
    renderTodoList(newproject);
    todoList = newproject;
}