import { projects } from "./index.js";
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
        const project = document.createElement('ul');
        project.textContent = `${projects[i].title}`;
        for (let j = 0 ; j < projects[i].todoList.length ; j++){
            const task = document.createElement('li');
            task.textContent = `${projects[i].todoList[j].title}`;
            project.appendChild(task);
        }
        sidebar.appendChild(project);
    }

    content.appendChild(sidebar);
}