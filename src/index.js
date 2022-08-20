import renderHeader from "./renderheader.js";
import todoForm from "./newTodoForm.js";
import createTodoListContainer from "./createTodoListContainer.js";
import renderFooter from "./renderFooter.js";
import renderSidebar from "./renderSidebar.js";
import './style.css';
import { checkDailyTasks } from "./detailsRemoveFunctions.js";
import favicon from './calendar-check.png';

export let todoList;
export let projects = [];

if (localStorage.getItem('projects')){
    projects = JSON.parse(localStorage.getItem('projects'));
}

let link = document.createElement('link');

link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.appendChild(link);

renderHeader();
renderSidebar();
checkDailyTasks();

renderFooter(); 