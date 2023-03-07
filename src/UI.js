export const UI = () => {
    const inboxButton = document.getElementById('inbox-button');
    const todayButton = document.getElementById('today-button');
    const thisWeekButton = document.getElementById('this-week-button');
    const addProjectButton = document.getElementById('add-project-button');
    const addProjectPopupButton = document.getElementById('popup-add-project-button');
    const closeProjectPopupButton = document.getElementById('popup-cancel-project-button');
    const addTaskButton = document.getElementById('add-task-button');
    const addTaskPopupButton = document.getElementById('button-add-task-popup')
    const closeTaskPopupButton = document.getElementById('button-cancel-task-popup')

    const loadPage = () => {
        loadEventListeners();
        setupButtons();
    }

    const loadEventListeners = () => {
        inboxButton.addEventListener('click', openInboxProjects);
        todayButton.addEventListener('click', openTodayProjects);
        thisWeekButton.addEventListener('click', openThisWeekProjects);
        addProjectButton.addEventListener('click', showProjectPopup);
        addProjectPopupButton.addEventListener('click', addProject);
        closeProjectPopupButton.addEventListener('click', closeProjectPopup);
        addTaskButton.addEventListener('click', showTaskPopup);
        addTaskPopupButton.addEventListener('click', addTask);
        closeTaskPopupButton.addEventListener('click', closeTaskPopup);
    }

    const setupButtons = () => {
        const projectButtons = document.querySelectorAll('[data-project-button]')
        projectButtons.forEach( projectButton => {
            projectButton.addEventListener('click', (event) => handleProjectButton(event));
        } )
    }

    const openInboxProjects = () => {
        console.log("hello")
    }

    const openTodayProjects = () => {
        
    }

    const openThisWeekProjects = () => {
        
    }

    const showProjectPopup = () => {
        const popup = document.querySelector('.add-project-popup');
        popup.classList.add('active');
        addProjectButton.classList.add('active');
    }

    const closeProjectPopup = () => {
        const popup = document.querySelector('.add-project-popup');
        popup.classList.remove('active');

        const input = document.getElementById('input-add-project-popup');
        input.value = "";

        addProjectButton.classList.remove('active');
    }

    const addProject = (e) => {
        e.preventDefault();
        const projectName = document.getElementById('input-add-project-popup').value;
        if ( projectName !== "" ) createProjectButton(projectName);
    }

    const createProjectButton = (projectName) => {
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
        setupButtons();
        closeProjectPopup();
    }

    const showTaskPopup = () => {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.add('active');
        addTaskButton.classList.add('active');
    }
    
    const closeTaskPopup = () => {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.remove('active');

        const input = document.getElementById('input-add-task-popup');
        input.value = "";

        addTaskButton.classList.remove('active');
    }

    const addTask = (e) => {
        e.preventDefault();
        const taskName = document.getElementById('input-add-task-popup').value;
        if( taskName !== "" ) createTask(taskName, "No date");
        closeTaskPopup();
    }

    const createTask = (taskName, date) => {
        const tasksList = document.getElementById('task-list');
        tasksList.insertAdjacentHTML('beforeend', `
            <button class="btn button-task" data-task-button>
                <div class="task-left-side">
                    <i class="fa-regular fa-circle"></i>
                    <p class="task-content">${taskName}</p>
                </div>
                <div class="task-right-side">
                    <div class="task-date">${date}</div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </button>
        `);
    }

    const handleProjectButton = (event) => {
        const projectName = event.currentTarget.children[0].children[1].textContent
        if(event.target.classList.contains('fa-xmark')) {
            deleteProject(projectName);
            return;
        }
        openProject(projectName);
    };

    const openProject = (projectName) => {

    }

    const deleteProject = (projectName) => {

    }

    return {
        loadPage
    }
}