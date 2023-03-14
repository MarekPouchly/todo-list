import Task from './Task';

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addTask(taskName, dueDate) {
        this.tasks.push(new Task(taskName, dueDate));
    }

    deleteTask(taskName) {
        const task = this.tasks.find((task) => task.name === taskName);
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    hasTask(taskName) {
        return this.tasks.some(task => task.name === taskName);
    }

    getTask(taskName) {
        const task = this.tasks.find((task) => task.name === taskName);
        return task ? this.tasks.indexOf(task) : null;
    }

    getAllTasks() {
        return this.tasks;
    }
}