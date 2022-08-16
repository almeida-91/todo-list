export default function addItemToSidebar(task) {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('toggle');
    const newItem = document.createElement('p');
    newItem.textContent = `${task}`;
    sidebar.appendChild(newItem);
}