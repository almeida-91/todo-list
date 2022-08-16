import { projects, todoList } from "./index.js";
import newTodoItem, { newProject } from "./newTodoItem";
import renderTodoList from "./renderTodoList.js";

export default function addTask
(project,task,description,dueDate,prio,notes) {
    let newTask = newTodoItem(task,description,dueDate,prio,notes);
    for (let i = 0 ; i < projects.length ; i++){
        if (projects[i].title == project){
            projects[i].todoList.push(newTask);
            console.log(projects[i].todoList);
            renderTodoList(projects[i]);
            return;
        }
    }
    let newproject = newProject(project,[]);
    newproject.todoList.push(newTask);
    console.log(newproject.todoList);
    projects.push(newproject);
    renderTodoList(newproject);
}