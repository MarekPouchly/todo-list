import { Storage } from './Storage.js';
import { TodoList } from './Todolist.js';
import { Project } from './Project.js';
import { Task } from './Task.js';

export class UI {
    static loadPage() {
        this.loadProjects();
        this.loadEventListeners();
        this.setupButtons();
    }

    static loadProjects() {
        const todoList = Storage.getTodoList();
        if (todoList !== null) {
            const projects = todoList.getAllProjects();
            projects.forEach(project => this.createProjectButton(project.name))
        }
    }
    
    static loadEventListeners() {
        const inboxButton = document.getElementById('inbox-button');
        const todayButton = document.getElementById('today-button');
        const thisWeekButton = document.getElementById('this-week-button');
        const addProjectButton = document.getElementById('add-project-button');
        const addProjectPopupButton = document.getElementById('popup-add-project-button');
        const closeProjectPopupButton = document.getElementById('popup-cancel-project-button');
        const addTaskButton = document.getElementById('add-task-button');
        const addTaskPopupButton = document.getElementById('button-add-task-popup');
        const closeTaskPopupButton = document.getElementById('button-cancel-task-popup');

        inboxButton.addEventListener('click', UI.openInboxProjects);
        todayButton.addEventListener('click', UI.openTodayProjects);
        thisWeekButton.addEventListener('click', UI.openThisWeekProjects);
        addProjectButton.addEventListener('click', UI.showProjectPopup);
        addProjectPopupButton.addEventListener('click', UI.addProject);
        closeProjectPopupButton.addEventListener('click', UI.closeProjectPopup);
        addTaskButton.addEventListener('click', UI.showTaskPopup);
        addTaskPopupButton.addEventListener('click', UI.addTask);
        closeTaskPopupButton.addEventListener('click', UI.closeTaskPopup);
    }

    static setupButtons() {
        const projectButtons = document.querySelectorAll('[data-project-button]')
        projectButtons.forEach( projectButton => {
            projectButton.addEventListener('click', (event) => this.handleProjectButton(event));
        } )
    }

    static openInboxProjects() {
        console.log("hello")
    }

    static openTodayProjects() {
        
    }

    static openThisWeekProjects() {
        
    }

    static showProjectPopup() {
        const popup = document.querySelector('.add-project-popup');
        popup.classList.add('active');

        const addProjectButton = document.getElementById('add-project-button');
        addProjectButton.classList.add('active');
    }

    static closeProjectPopup() {
        const popup = document.querySelector('.add-project-popup');
        popup.classList.remove('active');

        const input = document.getElementById('input-add-project-popup');
        input.value = "";

        const addProjectButton = document.getElementById('add-project-button');
        addProjectButton.classList.remove('active');
    }

    static addProject(e) {
        e.preventDefault();
        const projectName = document.getElementById('input-add-project-popup').value;
        if (projectName === "") {
            alert("You must set Project Name");
            return;
        }
        if (Storage.getTodoList().contains(projectName)) {
            alert("set different name");
            return;
        }
        Storage.addProject(projectName);
        UI.createProjectButton(projectName);
        UI.closeProjectPopup();
    }

    static createProjectButton(projectName) {
        const projectsList = document.getElementById('projects-list');
        projectsList.insertAdjacentHTML('afterbegin', `
            <button class="btn project-button" data-project-button>
                <div class="project-left-side">
                    <i class="fa-solid fa-bars"></i>
                    <span>${projectName}</span>
                </div>
                <div class="project-right-side">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </button>
        `);
        this.setupButtons();
    }

    static showTaskPopup() {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.add('active');

        const addTaskButton = document.getElementById('add-task-button');
        addTaskButton.classList.add('active');
    }

    static closeTaskPopup() {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.remove('active');

        const input = document.getElementById('input-add-task-popup');
        input.value = "";

        const addTaskButton = document.getElementById('add-task-button');
        addTaskButton.classList.remove('active');
    }

    static addTask(e) {
        e.preventDefault();
        const taskName = document.getElementById('input-add-task-popup').value;
        if( taskName !== "" ) this.createTask(taskName, "No date");
        this.closeTaskPopup();
    }

    static createTask(taskName, dueDate) {
        const tasksList = document.getElementById('task-list');
        tasksList.insertAdjacentHTML('beforeend', `
            <button class="btn button-task" data-task-button>
                <div class="task-left-side">
                    <i class="fa-regular fa-circle"></i>
                    <p class="task-content">${taskName}</p>
                </div>
                <div class="task-right-side">
                    <div class="task-date">${dueDate}</div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </button>
        `)
    }

    static handleProjectButton(event) {
        const projectName = event.currentTarget.children[0].children[1].textContent
        if(event.target.classList.contains('fa-xmark')) {
            this.deleteProject(projectName);
            return;
        }
        this.openProject(projectName);
    }

    static openProject(projectName) {

    }

    static deleteProject(projectName) {

    }

}