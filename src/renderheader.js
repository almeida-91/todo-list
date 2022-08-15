export default function renderHeader(){
    const header = document.getElementById('header');
    
    const headerText = document.createElement('h1');
    headerText.classList.add('header');
    headerText.textContent = 'Todo List';
    header.appendChild(headerText);
}