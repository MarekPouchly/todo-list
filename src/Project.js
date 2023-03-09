import { Task } from './task.js';

export class Project {
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

    addTask(taskName) {
        const task = new Task(taskName);
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        const task = this.tasks.find((task) => task.name === taskName);
        tasks.splice(tasks.indexOf(task), 1);
    }

    getTask(taskName) {
        return tasks.find((task) => task.name === taskName);
    }

    getAllTasks() {
        return this.tasks;
    }
}