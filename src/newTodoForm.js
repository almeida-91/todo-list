import createTodoListContainer from "./createTodoListContainer.js";
import addTask from "./newtask.js";
import { format } from 'date-fns';

export default function todoForm() {
    const content = document.getElementById('content');
    // Create form to append to DOM
    const formContainer = document.createElement('div');
    formContainer.id = 'formContainer';
    formContainer.style.visibility = 'visible';
    const form = document.createElement('form');
    form.classList.add('form');

    // Create label + input for each todo item attribute

    // Select Project
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for','project');
    projectLabel.innerHTML = 'Project : ';

    const projectInput = document.createElement('input');
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('id','project');

    form.appendChild(projectLabel);
    form.appendChild(projectInput);

    // Title/task
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for','title');
    titleLabel.innerHTML = 'Task : ';

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('id', 'title');

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

    form.appendChild(dueLabel);
    form.appendChild(dueInput);

    // Priority
    const prioLabel = document.createElement('label');
    prioLabel.setAttribute('for', 'priority');
    prioLabel.innerHTML = 'Priority : ';

    const prioInput = document.createElement('select');
    prioInput.setAttribute('id','priority');

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

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.innerHTML = 'Submit';

    submitButton.addEventListener('click',() => {
        let date = format(new Date(`${dueInput.value}`), 'dd-MM-yy');
        console.log(date);
        addTask(projectInput.value,titleInput.value,descInput.value,
        date,prioInput.value,notesInput.value)});

    formContainer.appendChild(form);
    formContainer.appendChild(submitButton);
    const todoListContainer = document.getElementById('todoListContainer');
    if (todoListContainer){
        content.insertBefore(formContainer, todoListContainer);
    } else {
        content.appendChild(formContainer);
        createTodoListContainer();
    }
}