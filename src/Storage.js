import { TodoList } from "./TodoList";

export class Storage {
    static saveTodoList(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    static getTodoList() {
        const todoList = localStorage.getItem("todoList");
        if (todoList !== null) {
            JSON.parse(todoList)
        } else {
            return null;
        }
    }

    static addProject(projectName){
        const todoList = this.getTodoList() || new TodoList;
        todoList.addProject(projectName);
        this.saveTodoList(todoList);
    }
  
    static deleteProject(projectName) {
        const todoList = this.getTodoList();
        todoList.deleteProject(projectName);
        localStorage.setItem(todoList);
    }
}