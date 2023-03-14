import TodoList from "./Todolist";
import Project from "./Project";

export default class Storage {
    static saveTodoList(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    static getTodoList() {
        const todoList = JSON.parse(localStorage.getItem("todoList"));
        if (todoList) {
            return Object.assign(new TodoList(), todoList);
        }
        return new TodoList();
    }

    static addProject(projectName){
        const todoList = this.getTodoList();
        todoList.addProject(projectName);
        this.saveTodoList(todoList);
    }
  
    static deleteProject(projectName) {
        const todoList = this.getTodoList();
        todoList.deleteProject(projectName);
        this.saveTodoList(todoList)
    }

    static addTask(projectName, taskName, dueDate) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(taskName, dueDate);
        this.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskName);
        this.saveTodoList(todoList);
    }

    static renameTask(projectName, oldTaskName, newTaskName) {
        const todoList = Storage.getTodoList();
        const project = todoList.getProject(projectName);
        const taskIndex = project.getTask(oldTaskName);
        if (taskIndex !== null) {
            project.tasks[taskIndex].name = newTaskName;
            Storage.saveTodoList(todoList);
        }
    }

    static setCompleteTask(projectName, taskName, status) {
        const todoList = Storage.getTodoList();
        const project = todoList.getProject(projectName);
        const taskIndex = project.getTask(taskName);
        if (taskIndex !== null) {
            project.tasks[taskIndex].completed = status;
            Storage.saveTodoList(todoList);
        }
    }
}