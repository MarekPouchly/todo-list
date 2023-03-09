import { TodoList } from "./Todolist";

export class Storage {
    static saveTodoList(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    static getTodoList() {
        return Object.assign(new TodoList(), JSON.parse(localStorage.getItem("todoList")));
    }

    static addProject(projectName){
        const todoList = this.getTodoList() || new TodoList;
        todoList.addProject(projectName);
        this.saveTodoList(todoList);
    }
  
    static deleteProject(projectName) {
        const todoList = this.getTodoList();
        todoList.deleteProject(projectName);
        this.saveTodoList(todoList)
    }
}