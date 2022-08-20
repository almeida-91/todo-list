import renderHeader from "./renderheader.js";
import todoForm from "./newTodoForm.js";
import createTodoListContainer from "./createTodoListContainer.js";
import renderFooter from "./renderFooter.js";
import renderSidebar from "./renderSidebar.js";
import './style.css';
import { checkDailyTasks } from "./detailsRemoveFunctions.js";

export let todoList;
export let projects = [];

if (localStorage.getItem('projects')){
    projects = JSON.parse(localStorage.getItem('projects'));
}

renderHeader();
renderSidebar();
//createTodoListContainer();a
checkDailyTasks();

renderFooter(); 