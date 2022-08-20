import { checkDailyTasks, checkWeeklyTasks, removeEmptyProject, save, seeDetails } from "./detailsRemoveFunctions.js";
import { projects } from "./index.js";
import renderTodoList from "./renderTodoList.js";
import toggleNewForm from "./toggleNewForm.js";
import weekIcon from './calendar-outline.png';
import dailyIcon from './clipboard-clock-outline.png';
import projectIcon from  './file-tree.png';
import taskIcon from './flag.png';
import inboxIcon from './inbox.png';

export default function renderSidebar(){    
    const content = document.getElementById('content');
    const sidebar = document.createElement('div');
    const weeklyImg = document.createElement('img');
    const weeklyTasks = document.createElement('a');
    const inboxImg = document.createElement('img');
    const inbox = document.createElement('a');
    const dailyImg = document.createElement('img');
    const dailyTasks = document.createElement('a');
    const upperSideBar = document.createElement('div');

    content.innerHTML = '';
    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');
    upperSideBar.classList.add('upperSideBar');

    inboxImg.src = inboxIcon;
    upperSideBar.appendChild(inboxImg);
    inbox.textContent = 'Inbox';
    inbox.href = '#';
    upperSideBar.appendChild(inbox);

    weeklyImg.src = weekIcon;
    upperSideBar.appendChild(weeklyImg);
    weeklyTasks.textContent = 'This week';
    weeklyTasks.href = "#";
    weeklyTasks.addEventListener('click',checkWeeklyTasks);
    upperSideBar.appendChild(weeklyTasks);

    dailyImg.src = dailyIcon;
    upperSideBar.appendChild(dailyImg);
    dailyTasks.href = '#';
    dailyTasks.textContent = 'Today';
    dailyTasks.addEventListener('click', checkDailyTasks);
    upperSideBar.appendChild(dailyTasks);

    sidebar.appendChild(upperSideBar);
    
    // Remove empty projects
    removeEmptyProject();

    // Add projects and todolists to sidebar
    const lowerSideBar = document.createElement('div');
    lowerSideBar.classList.add('lowerSideBar');

    for (let i = 0 ; i < projects.length ; i++) {
        const projectImg = document.createElement('img');
        projectImg.src = projectIcon;
        const project = document.createElement('a');
        project.classList.add('sidebarProject');
        project.href = '#';
        project.innerHTML = `<p>${projects[i].title}</p>`;
        project.addEventListener('click', ()=>{renderTodoList(projects[i])});
        lowerSideBar.appendChild(projectImg);
        lowerSideBar.appendChild(project);
        for (let j = 0 ; j < projects[i].todoList.length ; j++){
            const taskImg = document.createElement('img');
            taskImg.src = taskIcon;
            const task = document.createElement('a');
            taskImg.classList.add('sidebarTask');
            task.href = '#';
            task.innerHTML = `<p>${projects[i].todoList[j].title}</p>`;
            task.style.marginLeft = '1em';
            task.addEventListener('click',function(e){
                e.stopPropagation();
                seeDetails(projects[i],j);
            });
            lowerSideBar.appendChild(taskImg);
            lowerSideBar.appendChild(task);
        }
    }
    sidebar.appendChild(lowerSideBar);
    content.appendChild(sidebar);
}