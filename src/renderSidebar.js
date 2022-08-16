import toggleNewForm from "./toggleNewForm.js";

export default function renderSidebar(){    
    const content = document.getElementById('content');
    const sidebar = document.createElement('div');

    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = '<p>This is sidebar</p>';

    const newTask = document.createElement('a');
    newTask.id = 'toggle';
    newTask.innerHTML = 'Add new task';
    newTask.href = '#';
    newTask.addEventListener('click',toggleNewForm);
    sidebar.appendChild(newTask);
    
    

    content.appendChild(sidebar);
}