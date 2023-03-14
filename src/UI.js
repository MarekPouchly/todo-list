import Storage from './Storage';
import TodoList from './Todolist';

export default class UI {
    static loadPage() {
        this.loadProjects();
        this.loadEventListeners();
        this.setupProjectButtons();
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

    static setupProjectButtons() {
        const projectButtons = document.querySelectorAll('[data-project-button]')
        projectButtons.forEach( projectButton => {
            projectButton.addEventListener('click', UI.handleProjectButton);
        })        
    }

    static openInboxProjects() {
    }

    static openTodayProjects() {
        
    }

    static openThisWeekProjects() {
        
    }

    /* Projects */

    static showProjectPopup() {
        const popup = document.querySelector('.add-project-popup');
        const addProjectButton = document.getElementById('add-project-button');
        
        UI.closeAllPopups();
        popup.classList.add('active');
        addProjectButton.classList.add('active');

        const input = document.getElementById('input-add-project-popup');
        input.focus();
    }

    static closeProjectPopup() {
        const popup = document.querySelector('.add-project-popup');
        popup.classList.remove('active');

        const input = document.getElementById('input-add-project-popup');
        input.value = '';

        const addProjectButton = document.getElementById('add-project-button');
        addProjectButton.classList.remove('active');
    }

    static addProject(e) {
        e.preventDefault();
        const projectName = document.getElementById('input-add-project-popup').value;
        if (!projectName) {
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

    static handleProjectButton(event) {
        let projectName = this.children[0].children[1].textContent;
        if(event.target.classList.contains('fa-xmark')) {
            projectName = event.currentTarget.children[0].children[1].textContent;
            UI.deleteProject(projectName);
            return;
        }
        UI.closeAllPopups();
        UI.openProject(projectName);
    }

    static deleteProject(projectName) {
        Storage.deleteProject(projectName);
        this.clearProjectsList();
        this.loadProjects()
    }

    static openProject(projectName) {
        const previewTitle = document.getElementById('preview-title');
        previewTitle.textContent = projectName;
        UI.updateTaskUI(projectName)
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
        this.setupProjectButtons();
    }

    static clearProjectsList() {
        const projectsList = document.getElementById('projects-list');
        projectsList.textContent = "";
    }

    /* Tasks */
    static showTaskPopup() {
        const popup = document.querySelector('.add-task-popup');
        const addTaskButton = document.getElementById('add-task-button');
        
        UI.closeAllPopups()
        popup.classList.add('active');
        addTaskButton.classList.add('active');

        const input = document.getElementById('input-add-task-popup');
        input.focus();
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

        const projectName = document.getElementById('preview-title').textContent;
        const taskName = document.getElementById('input-add-task-popup').value;
        const dueDate = "No date";

        if (!taskName) {
            alert("Set task name");
            return;
        }

        if (Storage.getTodoList().getProject(projectName).hasTask(taskName)) {
            alert("This task is already in list");
            return;
        }

        Storage.addTask(projectName, taskName, dueDate);
        UI.updateTaskUI(projectName);
        UI.closeTaskPopup();
    }

    static deleteTask(taskName) {
        const projectName = document.getElementById("preview-title").textContent;
        Storage.deleteTask(projectName, taskName);
        UI.updateTaskUI(projectName)
    }

    static updateTaskUI(projectName) {
        UI.clearTaskList();
        const project = Storage.getTodoList().getProject(projectName);
        const tasks = project.getAllTasks();
        tasks.forEach((task) => UI.createTask(task.name, "No date", task.completed));
        UI.setupTaskButtons()
    }

    static createTask(taskName, dueDate, taskCompleted) {
        const tasksList = document.getElementById('task-list');
        tasksList.insertAdjacentHTML('beforeend', `
            <button class="btn button-task" data-task-button>
                <div class="task-left-side">
                    <i class="fa-circle ${taskCompleted ? 'fa-solid' : 'fa-regular'}"></i>
                    <p class="task-name ${taskCompleted ? 'completed' : ''}">${taskName}</p>
                    <input type="text" class="input-task-name" data-task-name-input>
                </div>
                <div class="task-right-side">
                    <div class="task-date">${dueDate}</div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </button>
        `)
    }

    static clearTaskList() {
        const taskList = document.getElementById('task-list');
        taskList.textContent = "";
    }

    static setupTaskButtons() {
        const taskButtons = document.querySelectorAll('[data-task-button]');
        const taskNameInputs = document.querySelectorAll('[data-task-name-input]')
        taskButtons.forEach((taskButton) => {
            taskButton.addEventListener('click', UI.handleTaskButton);
        })
        taskNameInputs.forEach((input) => {
            input.addEventListener('keypress', UI.renameTask);
        })
    }

    static handleTaskButton(event) {
        const taskName = this.children[0].children[1].textContent;
        const projectName = document.getElementById('preview-title');
        if (event.target.classList.contains("fa-xmark")) {
            UI.deleteTask(taskName);
            return;
        }
        if (event.target.classList.contains("task-name")) {
            if (event.detail === 2) {
                UI.showRenameTaskInput(this);
            }
        }
        if (event.target.classList.contains("fa-circle")) {
            UI.handleCompleteTask(this);
        }
    }

    static showRenameTaskInput(taskButton) {
        const taskNameParagraph = taskButton.children[0].children[1];
        const taskName = taskButton.children[0].children[1].textContent;
        const renameTaskInput = taskButton.children[0].children[2];

        UI.closeOtherTaskInputs();
        UI.closeAllPopups();

        taskNameParagraph.classList.add('active');
        renameTaskInput.classList.add('active');
        renameTaskInput.value = taskName;
    }

    static renameTask(e) {
        if (e.key === "Enter") {
            const oldTaskName = this.previousElementSibling.textContent;
            const newTaskName = this.value;
            const projectName = document.getElementById('preview-title').textContent;

            if (!newTaskName) {
                alert("You must set task name!");
                return;
            }

            if (Storage.getTodoList().getProject(projectName).hasTask(newTaskName) && oldTaskName !== newTaskName) {
                alert("This task is already in tasks. Set different name.");
                UI.closeRenameTaskInput(this);
                return;
            }

            Storage.renameTask(projectName, oldTaskName, newTaskName)
            UI.updateTaskUI(projectName)
            UI.closeRenameTaskInput(this);
        }
    }

    static closeRenameTaskInput(taskButton) {
        const taskNameParagraph = taskButton.previousElementSibling;

        taskNameParagraph.classList.remove('active');
        taskButton.classList.remove('active');
    }

    static closeOtherTaskInputs() {
        const inputs = document.querySelectorAll('[data-task-name-input]');
        const paragraphs = document.querySelectorAll('.task-name');

        if (inputs.length === 0) {
            return;
        }

        inputs.forEach(input => input.classList.remove('active'));
        paragraphs.forEach(paragraph => paragraph.classList.remove('active'));
    };

    static closeAllPopups() {
        UI.closeProjectPopup();
        UI.closeTaskPopup();
        UI.closeOtherTaskInputs()
    }

    static handleCompleteTask(taskButton) {
        const projectName = document.getElementById('preview-title').textContent;
        const taskName = taskButton.children[0].children[1].textContent;
        const icon = taskButton.children[0].children[0];
        const status = UI.getTaskCompleteStatus(projectName, taskName);

        Storage.setCompleteTask(projectName, taskName, status);
        UI.updateTaskUI(projectName);
    }

    static getTaskCompleteStatus(projectName, taskName) {
        const project = Storage.getTodoList().getProject(projectName);
        const taskIndex = project.getTask(taskName);
        return !(project.tasks[taskIndex].completed);
    }


}