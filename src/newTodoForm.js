import createTodoListContainer from "./createTodoListContainer.js";
import addTask from "./newtask.js";
import { format } from 'date-fns';
import { projects } from "./index.js";
import { newProject } from "./newTodoItem.js";

export default function todoForm() {
    const content = document.getElementById('content');
    const todoListContainer = document.getElementById('todoListContainer');
    // Create form to append to DOM
    const formContainer = document.createElement('div');
    formContainer.id = 'formContainer';
    formContainer.style.visibility = 'visible';
    formContainer.style.margin = '20px';
    formContainer.style.display = 'flex';
    formContainer.style.flexDirection = 'column';
    const form = document.createElement('form');
    form.classList.add('form');

    // Create label + input for each todo item attribute

    // Select Project
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for','project');
    projectLabel.innerHTML = 'Project : ';

    const projectInput = document.createElement('select');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('id','project');
    projectInput.required = true;

    for (let i = 0 ; i < projects.length ; i++){
        let project = document.createElement('option');
        project.value = projects[i].title;
        project.innerHTML = `${projects[i].title}`;
        projectInput.appendChild(project);
    }

    let project = document.createElement('option');
    project.value = 'Other';
    project.innerHTML = 'Other';
    projectInput.appendChild(project);

    projectInput.onchange = () => {
        if (projectInput.value == 'Other'){
            const newProjectLabel = document.createElement('label');
            newProjectLabel.setAttribute('for','newProjectInput');
            newProjectLabel.setAttribute('id','newProjectLabel');
            newProjectLabel.innerHTML = 'New project name : ';
            
            const newProjectInput = document.createElement('input');
            newProjectInput.setAttribute('type','text');
            newProjectInput.setAttribute('id','newProjectInput');
    
            form.insertBefore(newProjectLabel,titleLabel);
            form.insertBefore(newProjectInput,titleLabel);
        } else {
            const newProjectInput = document.getElementById('newProjectInput');
            const newProjectLabel = document.getElementById('newProjectLabel');
            form.removeChild(newProjectInput);
            form.removeChild(newProjectLabel);
        }
    }


    form.appendChild(projectLabel);
    form.appendChild(projectInput);

    // Title/task
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for','title');
    titleLabel.innerHTML = 'Task : ';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('id', 'title');
    titleInput.required = true;

    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    // Description
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for','description');
    descLabel.innerHTML = 'Description : ';

    const descInput = document.createElement('input');
    descInput.setAttribute('id','description');
    descInput.setAttribute('type','text');

    form.appendChild(descLabel);
    form.appendChild(descInput);

    // Due date
    const dueLabel = document.createElement('label');
    dueLabel.setAttribute('for','dueDate');
    dueLabel.innerHTML = 'Due : ';

    const dueInput = document.createElement('input');
    dueInput.setAttribute('id','dueDate');
    dueInput.setAttribute('type','date');
    dueInput.required = true;

    form.appendChild(dueLabel);
    form.appendChild(dueInput);

    // Priority
    const prioLabel = document.createElement('label');
    prioLabel.setAttribute('for', 'priority');
    prioLabel.innerHTML = 'Priority : ';

    const prioInput = document.createElement('select');
    prioInput.setAttribute('id','priority');
    prioInput.required = true;

    const prioHigh = document.createElement('option');
    prioHigh.value = 'High';
    prioHigh.text = 'High';
    prioInput.appendChild(prioHigh);

    const prioMedium = document.createElement('option');
    prioMedium.value = 'Medium';
    prioMedium.text = 'Medium';
    prioInput.appendChild(prioMedium);

    const prioLow = document.createElement('option');
    prioLow.value = 'Low';
    prioLow.text = 'Low';
    prioInput.appendChild(prioLow);

    prioMedium.selected = 'selected';

    form.appendChild(prioLabel);
    form.appendChild(prioInput);

    // Notes
    const notesLabel = document.createElement('label');
    notesLabel.setAttribute('for','notes');
    notesLabel.innerHTML = "Notes : ";

    const notesInput = document.createElement('textarea');
    notesInput.setAttribute('id','notes');

    form.appendChild(notesLabel);
    form.appendChild(notesInput);

    // Add new project input field if there are no projects
    if (projects.length == 0){
        const newProjectLabel = document.createElement('label');
        newProjectLabel.setAttribute('for','newProjectInput');
        newProjectLabel.setAttribute('id','newProjectLabel');
        newProjectLabel.innerHTML = 'New project name : ';
        
        const newProjectInput = document.createElement('input');
        newProjectInput.setAttribute('type','text');
        newProjectInput.setAttribute('id','newProjectInput');

        form.insertBefore(newProjectLabel,titleLabel);
        form.insertBefore(newProjectInput,titleLabel);
    }

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.innerHTML = 'Add Task';

    submitButton.addEventListener('click',() => {
        let date = format(new Date(`${dueInput.value}`), 'dd-MM-yy');
        if (projectInput.value != 'Other'){
            addTask(projectInput.value,titleInput.value,descInput.value,
            date,prioInput.value,notesInput.value);
        } else {
            const newProjectInput = document.getElementById('newProjectInput');
            addTask(newProjectInput.value,titleInput.value,descInput.value,
            date,prioInput.value,notesInput.value);
        }
    });

    formContainer.appendChild(form);
    formContainer.appendChild(submitButton);
    if (todoListContainer){
        todoListContainer.appendChild(formContainer);
    } else {
        content.appendChild(formContainer);
        createTodoListContainer();
    }
}