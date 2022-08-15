import renderHeader from "./renderheader.js";
import todoForm from "./newTodoForm.js";
import createTodoListContainer from "./createTodoListContainer.js";
import renderFooter from "./renderFooter.js";
import renderSidebar from "./renderSidebar.js";
import './style.css';

export let todoList = [], projects = [];

renderHeader();
renderSidebar();
createTodoListContainer();
todoForm();


renderFooter();