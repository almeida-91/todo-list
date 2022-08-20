import { save } from "./detailsRemoveFunctions.js";
import { projects, todoList } from "./index.js";
import todoForm from "./newTodoForm.js";
import newTodoItem, { newProject } from "./newTodoItem";
import renderSidebar from "./renderSidebar.js";
import renderTodoList from "./renderTodoList.js";

export default function addTask
(project,task,description,dueDate,prio,notes) {
    let newTask = newTodoItem(task,description,dueDate,prio,notes);
    let newtodoList;
    for (let i = 0 ; i < projects.length ; i++){
        if (projects[i].title == project){
            projects[i].todoList.push(newTask);
            renderSidebar();
            todoForm();
            renderTodoList(projects[i]);
            newtodoList = projects[i].todoList;
            save();
            return;
        }
    }
    let newproject = newProject(project,[]);
    newproject.todoList.push(newTask);
    projects.push(newproject);
    save();
    renderSidebar();
    todoForm();    
    renderTodoList(newproject);
    newtodoList = newproject.todoList;
}