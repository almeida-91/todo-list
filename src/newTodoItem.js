export default function newTodoItem(title, description,dueDate,priority,notes) {
    return {
        title : title,
        description : description,
        dueDate : dueDate,
        priority : priority,
        notes : notes,
    }
}

export function newProject(title,todoList) {
    return {
        title : title,
        todoList : todoList,
    }
}