export const UI = () => {

    const loadEventListeners = () => {
        const inboxButton = document.getElementById('inbox-button');
        const todayButton = document.getElementById('today-button');
        const thisWeekButton = document.getElementById('this-week-button');
        const addProjectButton = document.querySelector('.popup-add-project-button');
        const addProjectPopupButton = document.querySelector('.popup-add-project-button');
        const closeProjectPopupButton = document.querySelector('.popup-cancel-project-button');
        const addTaskButton = document.querySelector('.add-task-button');
        const addTaskPopupButton = document.querySelector('.popup-add-project-button')
        const closeTaskPopupButton = document.querySelector('.popup-cancel-project-button')

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
        
    }

    const addProject = () => {

    }

    const closeProjectPopup = () => {

    }

    const showTaskPopup = () => {
        
    }

    const addTask = () => {

    }

    const closeTaskPopup = () => {

    }

    return {
        loadEventListeners
    }
}