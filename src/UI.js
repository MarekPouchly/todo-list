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
        addProjectButton.classList.remove('active');
    }

    const addProject = (e) => {
        e.preventDefault();
        const projectName = document.getElementById('input-add-project-popup').value;
        if( projectName !== "" ) {
            console.log("Project created")
        }
    }

    const showTaskPopup = () => {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.add('active');
        addTaskButton.classList.add('active');
    }
    
    const closeTaskPopup = () => {
        const popup = document.querySelector('.add-task-popup');
        popup.classList.remove('active');
        addTaskButton.classList.remove('active');
    }

    const addTask = () => {
    }

    return {
        loadEventListeners
    }
}