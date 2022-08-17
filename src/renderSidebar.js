import { save, seeDetails } from "./detailsRemoveFunctions.js";
import { projects } from "./index.js";
import renderTodoList from "./renderTodoList.js";
import toggleNewForm from "./toggleNewForm.js";

export default function renderSidebar(){    
    const content = document.getElementById('content');
    const sidebar = document.createElement('div');

    content.innerHTML = '';
    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = '<p>This is sidebar</p>';

    const newTask = document.createElement('a');
    newTask.id = 'toggle';
    newTask.innerHTML = 'Add new task';
    newTask.href = '#';
    newTask.addEventListener('click',toggleNewForm);
    sidebar.appendChild(newTask);
    
    // Add projects and todolists to sidebar
    for (let i = 0 ; i < projects.length ; i++) {
        const project = document.createElement('a');
        project.innerHTML = `<p>${projects[i].title}</p>`;
        project.addEventListener('click', ()=>{renderTodoList(projects[i])});
        for (let j = 0 ; j < projects[i].todoList.length ; j++){
            const task = document.createElement('a');
            task.innerHTML = `<p>${projects[i].todoList[j].title}</p>`;
            task.addEventListener('click',function(e){
                e.stopPropagation();
                seeDetails(projects[i],j)
            }); 
            project.appendChild(task);
        }
        sidebar.appendChild(project);
    }

    const saveChanges = document.createElement('button');
    saveChanges.textContent = 'Save Changes';
    saveChanges.addEventListener('click',save);
    sidebar.appendChild(saveChanges);

    content.appendChild(sidebar);
}